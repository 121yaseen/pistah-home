"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaCheck, FaTimes } from "react-icons/fa";

interface ContactPageProps {
  onClose: () => void;
}

const PeopleMessage: React.FC<ContactPageProps> = ({ onClose }) => {
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "failure">("idle");
  const [formData, setFormData] = useState({
    socialmedia: "",
    email: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    socialmedia: "",
    email: "",
    content: "",
  });

  // States for animations
  const [isVisibleAnim, setIsVisibleAnim] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Trigger the opening animation on mount.
  useEffect(() => {
    // Slight delay to allow the animation to trigger.
    setTimeout(() => setIsVisibleAnim(true), 10);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    let formIsValid = true;
    const tempErrors = { ...errors };

    if (!formData.socialmedia) {
      tempErrors.socialmedia = "Profile is required";
      formIsValid = false;
    } else {
      tempErrors.socialmedia = "";
    }

    if (!formData.email) {
      tempErrors.email = "Email address is required";
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      formIsValid = false;
    } else {
      tempErrors.email = "";
    }

    if (!formData.content) {
      tempErrors.content = "Tell us more about your profile";
      formIsValid = false;
    } else {
      tempErrors.content = "";
    }

    setErrors(tempErrors);

    if (formIsValid) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setSubmissionStatus("success");
            setFormData({
              email: "",
              content: "",
              socialmedia: ""
            });
          } else {
            setSubmissionStatus("failure");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setSubmissionStatus("failure");
        });
    } else {
      setSubmissionStatus("failure");
    }
  };

  const renderStatusIcon = () => {
    if (submissionStatus === "sending") {
      return (
        <div style={styles.statusContainer}>
          <div style={styles.loadingCircle}></div>
          <span style={{ color: "#005BF7" }}>Sending...</span>
        </div>
      );
    }

    if (submissionStatus === "success") {
      return (
        <div style={styles.statusContainer}>
          <div style={styles.successCircle}>
            <span style={styles.successIcon}><FaCheck /></span>
          </div>
          <span style={{ color: "green" }}>Sent</span>
        </div>
      );
    }

    if (submissionStatus === "failure") {
      return (
        <div style={styles.statusContainer}>
          <div style={styles.failureCircle}>
            <span style={styles.failureIcon}><FaTimes /></span>
          </div>
          <span style={{ color: "red" }}>Failed</span>
        </div>
      );
    }

    return null;
  };

  // Instead of calling onClose directly, trigger the closing animation.
  const handleClose = () => {
    setIsClosing(true);
    // Wait for the animation to complete before calling onClose.
    setTimeout(() => onClose(), 300);
  };

  return createPortal(
    <div
      style={{
        ...styles.overlay,
        opacity: isVisibleAnim && !isClosing ? 1 : 0,
        transition: "opacity 300ms ease",
      }}
    >
      <div
        style={{
          ...styles.modal,
          transform: isVisibleAnim
            ? isClosing
              ? "translateY(-20px)"
              : "translateY(0)"
            : "translateY(20px)",
          transition: "transform 300ms ease",
        }}
      >
        <button style={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h1 style={styles.heading}>We are all ears</h1>
          <div style={styles.inputContainer}>
            <input
              name="socialmedia"
              value={formData.socialmedia}
              onChange={handleChange}
              style={styles.emailInput}
              placeholder="Share your profile"
            />
            {errors.socialmedia && <p style={styles.error}>{errors.socialmedia}</p>}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.emailInput}
              placeholder="Your email"
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div style={styles.inputContainer}>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Tell us about your profile. Share more profiles (if any)"
            />
            {errors.content && <p style={styles.error}>{errors.content}</p>}
          </div>

          <div style={styles.buttonWrapper}>
            {renderStatusIcon()}
            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: buttonHover ? "#0150d8" : "#005BF7",
                cursor: submissionStatus === "sending" ? "not-allowed" : "pointer",
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "700px",
    position: "relative" as const,
  },
  closeButton: {
    position: "absolute" as const,
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#000",
  },
  form: {
    color: "#000844",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  emailInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "155px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    padding: "10px 20px",
    fontWeight: "bold",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.1s ease-in-out",
    fontSize: "16px",
    marginLeft: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
  loadingCircle: {
    border: "3px solid #ccc",
    borderTop: "3px solid #005BF7",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    animation: "spin 1s linear infinite",
    marginRight: "8px",
  },
  successCircle: {
    border: "3px solid green",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },
  successIcon: {
    color: "#fff",
    fontSize: "12px",
  },
  failureCircle: {
    border: "3px solid red",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },
  failureIcon: {
    color: "white",
    fontSize: "14px",
  },
};

export default PeopleMessage;