import React from "react";
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container";


class UsersTable extends React.Component {

    render() {
        const righe = this.props.users.map((user) => {
            return (
                <tr key={user.id.toString()}>
                    <td> {user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            )
        })
        return (
            <Container> {/* Usa Container per centrare e controllare la larghezza */}
                <h1>Lista utenti</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {righe}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default UsersTable