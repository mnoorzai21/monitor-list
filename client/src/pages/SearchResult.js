import { useEffect, } from "react";
import { searchTitle } from "../util/IMDBapi"


export default function SearchResult() {
  useEffect(() => {
    const SearchResult = async () => {
      try {
        const data = await searchTitle();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    SearchResult();
  }, []);
    return (
      <div>
        <h1>SEARCH RESULT LIST</h1>
        <p>
  Temporary SEARCH RESULT Route
        </p>
      </div>
    );
  }