import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Incremento = () => {
    const [value, setValue] = useState(1)
    return (
        <div>
            <p>Value: {value}</p>
            <Button variant="success" className="me-3" onClick={() => setValue(value + 1)}>Incrementa</Button>
            <Button variant="success" onClick={() => setValue(value - 1)}>Decrementa</Button>
        </div>
    )
}

export default Incremento;
