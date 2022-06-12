import { useAuth } from "../util/auth";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { searchTitleAPI } from "../util/IMDBapi";

export default function ProtectedPageExample() {
  const { user } = useAuth();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            WATCHLIST STUFF
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Temporary {user.username} Watchlist</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
