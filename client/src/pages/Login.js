import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Button } from "react-bootstrap";


// TODO: customize styles or import styles with favorite css approach
const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  const location = useLocation();

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit">
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}
