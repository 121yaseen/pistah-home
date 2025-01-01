import React, { useState } from "react";

const ContactPageComponent = () => {
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

    // Validate required fields
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
      tempErrors.content = "Content is required";
      formIsValid = false;
    } else {
      tempErrors.content = "";
    }

    setErrors(tempErrors);

    if (formIsValid) {
      // Handle form submission logic here
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
    <div style={styles.container}>
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
              placeholder='Your first name'
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
              placeholder='Your last name'
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
            placeholder='Your email address'
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.inputContainer}>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            style={styles.textarea}
            placeholder='Your message for us'
          />
          {errors.content && <p style={styles.error}>{errors.content}</p>}
        </div>

        <div style={styles.buttonWrapper}>
          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: buttonHover ? '#001464' : '#0b57d0',  // Change color based on hover state
            }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#001464',
  },
  form: {
    backgroundColor: '#fff',  // Transparent background
    padding: '30px',
    width: '700px',  // Increased width by 25%
    color: '#001464'
  },
  heading: {
    marginBottom: '20px',  // Add some space below the heading
    fontSize: '30px',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: '30px', // Equal spacing between rows
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px', // Equal spacing between rows
  },
  halfInputContainer: {
    width: '48%', // Each column takes nearly half the row with some space in between
  },
  input: {
    width: '100%', // Ensure input fields take up the full width of their container
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#F3F4F6',
    color: 'black',
  },
  emailInput: {
    width: '100%',  // Ensure email input takes full width
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#F3F4F6',
    color: 'black',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#F3F4F6',
    color: 'black',
    minHeight: '150px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'right', // Center the button horizontally
  },
  button: {
    padding: '12px 32px',
    fontWeight: 'bold',
    backgroundColor: '#0b57d0',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default ContactPageComponent;
