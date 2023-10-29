import React from 'react'

class MyForm1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: '' };

    }

    handleChange = (event) => {
        const newValue = event.target.value;
        this.setState({ nome: newValue });
        document.getElementById("actual-state").innerHTML = `Stato attuale: ${newValue}`;
    }

    handleSubmit = (event) => {
        alert('E\' stato inserito un nome: ' + this.state.nome);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={this.state.nome} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div id="actual-state">Stato Attuale:</div>
            </div>
        );
    }
}


export default MyForm1