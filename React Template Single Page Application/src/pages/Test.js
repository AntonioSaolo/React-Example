import DynamicGraph from '../components/DynamicGraph';
import React, { useState, useEffect } from 'react';


const Test = () => {
    const [plotData, setPlotData] = useState(
        [
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
            }
        ]
    );

    useEffect(() => {
        // Aggiungi nuovi dati piuttosto che sovrascriverli
        const interval = setInterval(() => {
            setPlotData(currentData => {
                const newX = currentData[0].x[currentData[0].x.length - 1] + 1; // Incrementa l'ultimo valore x
                const newY = Math.random() * 10; // Genera un nuovo valore y casualmente

                return [
                    {
                        ...currentData[0],
                        x: [...currentData[0].x, newX],
                        y: [...currentData[0].y, newY]
                    }
                ];
            }
            );
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <main>
            <h2>Test page</h2>
            <p>Bentornato!</p>
            <DynamicGraph data={plotData} />
        </main>
    );
};

export default Test;
