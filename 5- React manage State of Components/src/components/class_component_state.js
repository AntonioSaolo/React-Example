import React from 'react'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    incrementa = () => {
        this.setState({ count: this.state.count + 1 })

    }
    decrementa = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div className="component-1">
                <h1>Gestione Stato semplice</h1>
                <button onClick={this.incrementa}>Incrementa</button>
                <button onClick={this.decrementa}>Decrementa</button>
                <h2>Contatore: {this.state.count}</h2>
            </div>
        )
    }

}

export default Component