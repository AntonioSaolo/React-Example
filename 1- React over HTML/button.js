

'use strict';
const e = React.createElement;

class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {

        if (this.state.liked) {
            return 'Hai cliccato il bottone';
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Click'
        );
    }
}

const domContainer = document.getElementById("wrapper_button");
const root = ReactDOM.createRoot(domContainer);
root.render(e(MyButton));