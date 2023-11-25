import React from 'react'
import { Link } from 'react-router-dom'


class Test extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }
    componentDidMount() {
        console.log("Componente Test caricato!!")
    }
    componentWillUnmount() {
        console.log("Componente Test smontato")
    }

    render() {
        return (
            <div>
                <h2>Test</h2>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Test