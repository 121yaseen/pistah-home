import React, { useState } from "react";

interface ContactPageProps {
  onClose: () => void;
}

const ContactPageComponent: React.FC<ContactPageProps> = ({ onClose }) => {
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    let formIsValid = true;
    const tempErrors = { ...errors };

    if (!formData.firstName) {
      tempErrors.firstName = "First name is required";
      formIsValid = false;
    } else {
      tempErrors.firstName = "";
    }

    if (!formData.lastName) {
      tempErrors.lastName = "Last name is required";
      formIsValid = false;
    } else {
      tempErrors.lastName = "";
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
      tempErrors.content = "Message is required";
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
            alert("Message sent successfully");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              content: "",
            });
          } else {
            alert("Error sending message");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error sending message");
        });
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h1 style={styles.heading}>We are all ears</h1>
          <div style={styles.inputRow}>
            <div style={styles.halfInputContainer}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
                placeholder="Your first name"
              />
              {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
            </div>

            <div style={styles.halfInputContainer}>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
                placeholder="Your last name"
              />
              {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
            </div>
          </div>

          <div style={styles.inputContainer}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.emailInput}
              placeholder="Your email address"
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div style={styles.inputContainer}>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Your message for us"
            />
            {errors.content && <p style={styles.error}>{errors.content}</p>}
          </div>

          <div style={styles.buttonWrapper}>
            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: buttonHover ? "#001464" : "#0b57d0",
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
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
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "760px",
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
  },
  form: {
    color: "#001464",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  inputRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "20px"
  },
  halfInputContainer: {
    flex: "1 1 calc(50% - 10px)",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
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
    minHeight: "100px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    padding: "12px 32px",
    fontWeight: "bold",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    fontSize: "16px",
    borderRadius: "4px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
};

export default ContactPageComponent;