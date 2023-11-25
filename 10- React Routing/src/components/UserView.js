import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";


function UserView() {
    const { userId } = useParams();
    const [user, setData] = useState([]);

    useEffect(() => {
        console.log(userId)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((user) => setData(user))
    }, [userId])

    return (
        <section className="d-flex flex-column align-items-center">
            <h1>Dettaglio utente</h1>
            <Card style={{ width: "18rem" }}>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <strong>Username: </strong><span>{user.username}</span><br />
                    <strong>Username: </strong><span>{user.email}</span>
                </Card.Text>
            </Card>
            <hr />
            <Link to="/users">Users</Link>
        </section>
    )
}

export default UserView