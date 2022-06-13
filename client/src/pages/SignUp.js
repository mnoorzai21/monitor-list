import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Button } from "react-bootstrap";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the home page
    return <Navigate to="/" replace />;
  }
  return (
    <section className="container container-fluid d-flex flex-row flex-wrap justify-content-center">
      <div className="text-center col-md-2">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="text-start mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              disabled={loading}
              type="username"
              placeholder="Enter username"
              name="username"
              value={formState.username.value}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="text-start mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              disabled={loading}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formState.email.value}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="text-start mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              disabled={loading}
              id="new-password"
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password.value}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button disabled={loading} variant="primary" type="submit">
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Form>
      </div>
    </section>
  );
}
