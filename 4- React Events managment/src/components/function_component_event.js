function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("button cliccato!!")
        alert('hai cliccato!!')
        document.getElementById("testo").innerHTML = "Hai premuto!!"
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Invia</button>
            <div id="testo"></div>
        </form>
    )
}

export default Form