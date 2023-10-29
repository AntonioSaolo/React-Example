import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log()
    }

    cambiaTestoRicerca = (e) => {
        this.props.onChangeTestoRicerca(e.target.value);
    }

    render() {
        const testoRicerca = this.props.testoRicerca;
        return (
            <form>
                <label for="ricerca">Testo da ricercare:</label>
                <input
                    id="ricerca"
                    type="text"
                    value={testoRicerca}
                    onChange={this.cambiaTestoRicerca} />
            </form>
        );
    }
}

export default Test