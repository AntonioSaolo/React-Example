import React from "react";

class MyForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nomeSelect: '', nomeText: '', isSubmitted: false };

    }
    createSelect = (values) => {
        var options = values.map((value) => (
            <option key={value} value={value}>{value}</option>
        ));
        return (
            <select onChange={this.handleChangeSelect}>
                {options}
            </select>
        )
    }

    handleChangeSelect = (event) => {
        this.setState({ nomeSelect: event.target.value });
        this.setState({ isSubmitted: false })
    }

    handleChangeText = (event) => {
        this.setState({ nomeText: event.target.value });
        this.setState({ isSubmitted: false })

    }


    handleSubmit = (event) => {
        if (this.state.nomeSelect === '' && this.state.nomeText === '') {
            alert('Non è stato inserito alcun nome!');
            return;
        }
        event.preventDefault()
        this.setState({ isSubmitted: true })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Seleziona Nome: </label>
                {this.createSelect(["", "Luca", "Marco", "Anna"])}
                <br /><br />
                <label>Digita Nome: </label>
                <textarea onChange={this.handleChangeText} />
                <input type="submit" value="Invia" />
                <div id="form2-div">
                    {this.state.isSubmitted && this.state.nomeSelect !== '' &&
                        <h3>Scelta Select: {this.state.nomeSelect}</h3>
                    }
                    {this.state.isSubmitted && this.state.nomeText !== '' &&
                        <h3>Scelta Text: {this.state.nomeText}</h3>
                    }
                </div>
            </form>
        );
    }

}

export default MyForm2
