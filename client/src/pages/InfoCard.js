import { useEffect } from "react";
import { useAuth } from "../util/auth";
import { Title, watchTitle } from "../util/IMDBapi";
import { } from "react-bootstrap";

export default function InfoCard() {
    const { isLoggedIn, user } = useAuth();
    useEffect(() => {
        const getTitle = async () => {
            try {
                const data = await watchTitle();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getTitle();
    }, []);
    return (
        <div></div>
    );
}