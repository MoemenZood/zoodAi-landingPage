import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./placeholder.css";
const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.zood.ai/api/v1/request-remove-accounts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Your request has been submitted successfully.");
        setEmail(""); // Reset email field
      } else {
        setMessage("Failed to submit your request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Delete account</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Please enter email account, we will review your request"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "white",
    padding: "20px",
  },
  title: {
    fontSize: "1.5rem",
    color: "#2563EB", // TailwindCSS text-blue-600 color
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "15px",
    padding: "30px",
    backgroundColor: "#ffffff",
    border: "2px solid #007BFF",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "600px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "100%",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#2563EB", // TailwindCSS text-blue-600 color
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
  message: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "green",
    textAlign: "center",
  },
};

export default Unsubscribe;
