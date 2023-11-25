import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")

    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Link to='/users'>users</Link>
            </div>
        )
    }
}

export default Home