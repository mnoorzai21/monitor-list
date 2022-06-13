import { useQuery } from "@apollo/client";
import { ME } from "../util/queries";
import { useEffect } from "react";
import { useAuth } from "../util/auth";
import { Title, WatchList } from "../util/IMDBapi";
import {} from "react-bootstrap";

export default function Watchlist() {
  const { isLoggedIn, user } = useAuth();
  const { loading, data, error } = useQuery(ME);

  return (
    <div class="card">
      <img src="${img}" alt="${product}"></img>
      {/* <p class="categoryText">${category}</p> */}
    </div>
  );
}
