import { useEffect } from "react";
import { useAuth } from "../util/auth";
import { Title, WatchList } from "../util/IMDBapi";
import { } from "react-bootstrap";

export default function WatchListCard() {
    const { isLoggedIn, user } = useAuth();
    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await watchTitle();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getInfo();
    }, []);
    return (
        <div class = "card">
            <img src="${img}" alt="${product}" ></img>
            <p class="categoryText">${category}</p>

        </div>
    );
}