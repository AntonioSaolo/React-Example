import React from "react";


class ProvaEvento extends React.Component {
    constructor(props) {
        super(props);
        console.log("Run costructor!!")

        // Necessario solo in caso di dichiarazione di funzione senza arrow function (Esempio a riga 13)
        //this.handleClick = this.handleClick.bind(this); 

    }
    // Per usare la dichiarazione sottostanza è necessario usare il metodo bind nel costruttore (riga 10)
    // handleClick() {
    //     console.log('ok');
    // }

    handleClick = () => {
        console.log('ok');
    }

    prova = (p) => {
        console.log(`Valore passato: ${p}`);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >handleClick</button>
                <hr></hr>
                <button onClick={() => this.prova(5)}>Prova</button>

            </div>
        );
    }
}


export default ProvaEvento;