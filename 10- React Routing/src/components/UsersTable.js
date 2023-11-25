import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


class UserTable extends React.Component {
    render() {
        const righe = this.props.users.map((user) => {
            return (
                <tr key={user.id.toString()}>
                    <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>)
        })
        return (
            <section>
                <h1>Lista Utenti</h1>
                <Table striped bordered hover>
                    <thead>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {righe}
                    </tbody>
                </Table>
            </section>
        )
    }

}

export default UserTable