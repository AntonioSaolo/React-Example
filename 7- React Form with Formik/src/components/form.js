// Importa React e alcuni componenti da librerie esterne.
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Crea una nuova classe chiamata UserAdd.
class UserAdd extends React.Component {

    // Metodo per creare un elemento di input con etichetta e messaggi di errore.
    createInputDiv = (fieldName, values, handleChange, errors, touched) => {
        return (
            <div>
                {/* Mostra il nome del campo con la prima lettera maiuscola */}
                <label>{this.capitalizeFirstLetter(fieldName)}</label>
                <br />
                {/* Campo di input */}
                <input
                    type="text"
                    name={fieldName}
                    value={values[fieldName]}
                    onChange={handleChange}
                />
                {/* Mostra il messaggio di errore se ci sono errori e se il campo è stato toccato */}
                {errors[fieldName] && touched[fieldName] && (
                    <div className="alert alert-danger">
                        {errors[fieldName]}
                    </div>
                )}
            </div>
        );
    }

    // Metodo per trasformare la prima lettera di una stringa in maiuscolo.
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Metodo render per mostrare l'interfaccia utente.
    render() {
        // Schema di validazione per i dati inseriti.
        const mioSchema = Yup.object().shape({
            name: Yup.string()
                .min(2, 'Nome troppo corto')
                .max(10, 'Nome troppo lungo')
                .required('Campo obbligatorio'),
            username: Yup.string()
                .min(2, 'Username troppo corto')
                .max(10, 'Username troppo lungo')
                .required('Campo obbligatorio'),
            email: Yup.string()
                .email('Email NON valida')
                .required('Campo obbligatorio')
        });

        // Restituisci l'interfaccia utente.
        return (
            <div>
                <h2>User Add</h2>
                <Formik
                    // Valori iniziali per i campi di input.
                    initialValues={{ name: "", username: "", email: "" }}
                    // Usa lo schema di validazione creato in precedenza.
                    validationSchema={mioSchema}
                    // Azioni da eseguire quando il form viene inviato.
                    onSubmit={(values, { setSubmitting }) => {
                        // Simula l'invio dei dati
                        alert(`Sono stati inseriti i seguenti dati: ${values.name}, ${values.username}, ${values.email}`);
                        // Indica che l'invio è terminato.
                        setSubmitting(false);
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Crea e mostra il campo di input per il nome. */}
                            {
                                this.createInputDiv('name', values, handleChange, errors, touched)
                            }
                            {/* Crea e mostra il campo di input per lo username. */}
                            {
                                this.createInputDiv('username', values, handleChange, errors, touched)
                            }
                            {/* Crea e mostra il campo di input per l'email. */}
                            {
                                this.createInputDiv('email', values, handleChange, errors, touched)
                            }
                            {
                                /* Bottone per inviare il form.
                                Dopo la pressione viene disattivato finchè l'operazione di invio dei dati non è terminata
                                e viene dunque setSubmitting(false) a riga 69*/
                            }
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        </form>
                    )}
                </Formik>

            </div>
        )
    }

}

// Esporta la classe UserAdd in modo che possa essere utilizzata in altri moduli.
export default UserAdd;
