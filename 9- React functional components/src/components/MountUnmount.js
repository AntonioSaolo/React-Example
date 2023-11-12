import { useEffect } from "react";

const MountUnmount = () => {
    useEffect(() => {
       console.log("Componente montato");
        return () => {console.log("Componente smontato!") }
    }, [])

    return (
        <div>
            <p>Mount/Unmount</p>
        </div>
    )

}

export default MountUnmount