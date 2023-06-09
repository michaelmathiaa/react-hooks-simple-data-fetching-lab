// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [randomDog, setRandomDog] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setRandomDog(data.message);
        });
    }, []);
    return (
        <div>
            {randomDog ? <img src={randomDog} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}

export default App;
