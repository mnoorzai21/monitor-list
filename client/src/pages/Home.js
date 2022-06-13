import { useEffect } from "react";
import { useAuth } from "../util/auth";
import { top250Movies, top250TVs } from "../util/IMDBapi";
import { Card, Button, CardGroup } from "react-bootstrap";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const topMovieData = await top250Movies();
        console.log(topMovieData);
      } catch (error) {
        console.log(error);
      }
    };
    const getTVs = async () => {
      try {
        const topTVData = await top250TVs();
        console.log(topTVData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
    getTVs();
  }, []);
  return (
      <CardGroup>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary" href="/InfoCard">
              <Card.Img />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary" href="/InfoCard">
              <Card.Img src="https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg" />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary" href="/InfoCard">
              <Card.Img src="https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg" />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary" href="/InfoCard">
              <Card.Img src="https://imdb-api.com/images/original/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_Ratio0.6716_AL_.jpg" />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary" href="/InfoCard">
              <Card.Img src="https://imdb-api.com/images/original/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.6716_AL_.jpg" />
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Button variant="primary">
              <Card.Img src="https://imdb-api.com/images/original/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_Ratio0.6716_AL_.jpg" />
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
  );
}
