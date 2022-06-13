// import { useEffect, useState } from "react";
// import { searchTitle } from "../util/IMDBapi"
// import { Form, Container, Button, Card, CardGroup,} from "react-bootstrap";
// import { useAuth } from "../util/auth";
// import { useMutation, } from "@apollo/client";
// import { ADD_WATCH_ITEM } from "../util/mutations";



// export default function SearchResult() {

//     const { isLoggedIn, logout } = useAuth();
 
//     const [searchedTitles, setSearchedTitles] = useState([]);
//     const [searchInput, setSearchInput] = useState("");
//     const [savedTitles, setSavedTitles] = useState(null);
   
//     useEffect(() => {
//       return () => {
//         savedTitles(savedTitles);
//       };
//     }, []);
   
//     const [saveTitle, { error }] = useMutation(ADD_WATCH_ITEM);
   
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
   
//       if (!searchInput) {
//         return false;
//       }
//       try {
//         const response = await searchTitle(searchInput);
   
//         if (!response.ok) {
//           throw new Error("something went wrong!");
//         }
   
//         const { items } = await response.json();
   
//         const TitleData = items.map((titles) => ({
//           IMDbId: titles.id,
//           title: titles.results.title,
//           image: titles.results.image || "",
//         }));
   
//         setSearchedTitles(TitleData);
//         setSearchInput("");
//       } catch (err) {
//         console.error(err);
//       }
//     };
   
//     const handleSaveTitle = async (titleId) => {
//       const titleToSave = searchedTitles.find(
//         (title) => title.titleId === titleId
//       );
   
//       const token = useAuth.loggedIn() ? useAuth.getToken() : null;
   
//       if (!token) {
//         return false;
//       }
   
//       try {
//         const response = await saveTitle({
//           variables: {
//             input: titleToSave,
//           },
//         });
   
//         if (!response) {
//           throw new Error("something went wrong!");
//         }
   
//         setSavedTitles([...savedTitles, titleToSave.titleId]);
//       } catch (err) {
//         console.error(err);
//       }
//     };
   
//     return (
//       <Container>
//         <Form className="d-flex" onSubmit={handleFormSubmit}>
//           <Form.Control
//             name="searchInput"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             type="text"
//             placeholder="Search Title"
//             className="me-2"
//             aria-label="Search" />
//           <Button variant="primary" className="navbar-link" type="submit">
//             Search
//           </Button>
//         </Form>
//       </Container>,
//       <Container>
//           <h2>
//             {searchedTitles.length
//               ? `Viewing ${searchedTitles.length} results:`
//               : "Search for a title to begin"}
//           </h2>
//           <CardGroup>
//             {searchedtitles.map((title) => {
//               return (
//                 <Card key={title.titleId} border="dark">
//                   {title.image ? (
//                     <Card.Img
//                       src={title.image}
//                       alt={`The cover for ${title.title}`}
//                       variant="top" />
//                   ) : null}
//                   <Card.Body>
//                     <Card.Title>{title.title}</Card.Title>
//                     <p className="small">Authors: {title.authors}</p>
//                     <Card.Text>{title.description}</Card.Text>
//                     {Auth.loggedIn() && (
//                       <Button
//                         disabled={savedtitleIds?.some(
//                           (savedTitleId) => savedtitleId === title.titleId
//                         )}
//                         className="btn-block btn-info"
//                         onClick={() => handleSavetitle(title.titleId)}
//                       >
//                         {savedTitleIds?.some(
//                           (savedTitleId) => savedTitleId === title.titleId
//                         )
//                           ? "This title has already been saved!"
//                           : "Save this title!"}
//                       </Button>
//                     )}
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//           </CardGroup>
//         </Container>
//     );
//   };