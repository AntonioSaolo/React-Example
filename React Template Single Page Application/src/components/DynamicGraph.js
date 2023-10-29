import React from 'react';
import Plot from 'react-plotly.js';

const DynamicGraph = ({ data, layout }) => {
    // Imposta un layout di default se non viene fornito
    const defaultLayout = {
        width: 320,
        height: 240,
        title: 'Un Grafico Dinamico'
    };

    return (
        <Plot
            data={data}
            layout={layout || defaultLayout}
        />
    );
};

export default DynamicGraph;
