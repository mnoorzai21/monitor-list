import { useEffect } from "react";
import { useAuth } from "../util/auth";
import { top250Movies } from "../util/IMDBapi";
import { Card, Container } from "react-bootstrap";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await top250Movies();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
        explicabo ipsum, facilis repellendus omnis amet in accusantium quisquam
        nam qui consectetur sunt distinctio nemo molestiae ratione. Iure,
        aliquam debitis.
      </p>
    </div>
  );
}
