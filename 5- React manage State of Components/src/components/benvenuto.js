function BenvenutoUtente(props) {
    return <h1>Benvenuto Utente</h1>
}

function BenvenutoOspite(props) {
    return <h1>Benvenuto Ospite</h1>
}

function Benvenuto(props) {
    const utenteAutenticato = props.utenteAutenticato
    if (utenteAutenticato) {
        return <BenvenutoUtente />
    }
    return <BenvenutoOspite />
}

export default Benvenuto