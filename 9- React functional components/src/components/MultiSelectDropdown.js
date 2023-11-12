import React from 'react';
import Select from 'react-select';

export default class MultiSelectDropdown extends React.Component {
    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // Per visualizzare correttamente in console, si stampa l'intero array di opzioni selezionate
        console.log('Selected:', selectedOption);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                name="form-field-name"
                value={selectedOption}
                onChange={this.handleChange}
                isMulti
                closeMenuOnSelect={false}  // Imposta questa proprietà su false per mantenere il menu aperto
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    // Aggiungi altre opzioni qui se necessario
                ]}
            />
        );
    }
}
