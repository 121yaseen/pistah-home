import React, { useState } from 'react';

const ContactPageComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    content: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    content: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let formIsValid = true;
    let tempErrors = { ...errors };

    // Validate required fields
    if (!formData.firstName) {
      tempErrors.firstName = 'First name is required';
      formIsValid = false;
    } else {
      tempErrors.firstName = '';
    }

    if (!formData.lastName) {
      tempErrors.lastName = 'Last name is required';
      formIsValid = false;
    } else {
      tempErrors.lastName = '';
    }

    if (!formData.email) {
      tempErrors.email = 'Email address is required';
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      formIsValid = false;
    } else {
      tempErrors.email = '';
    }

    if (!formData.content) {
      tempErrors.content = 'Content is required';
      formIsValid = false;
    } else {
      tempErrors.content = '';
    }

    setErrors(tempErrors);

    if (formIsValid) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputRow}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
          </div>
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.emailInput}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.content && <p style={styles.error}>{errors.content}</p>}
        </div>

        <button type="submit" style={styles.button}>Send</button>
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
  },
  form: {
    backgroundColor: 'rgba(0, 20, 100, 0.7)',  // Transparent background
    padding: '20px',
    borderRadius: '20px',  // Round borders
    width: '700px',  // Increased width by 25%
    color: '#fff',
    opacity: 0.9
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',  // Adjust space between first name and last name
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#fff',
  },
  emailInput: {
    width: '100%',  // Ensure email input takes full width
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#fff',
    minHeight: '100px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  }
};

export default ContactPageComponent;