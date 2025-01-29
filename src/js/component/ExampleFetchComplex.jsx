import React, { useEffect, useState } from "react";

export const ExampleFetchComplex = () => {

    const [characters, setCharacters] = useState([]);

    const base_url = 'https://swapi.tech/api';

    const getCharacters = async () => {
        const uri = `${base_url}/people`

        const options = {
            method: 'GET'
        }

        const response = await fetch(uri, options)

        if (!response.ok) {
            console.log('Error: ', response.status, response.statusText)
            return;
        }

        const data = await response.json()
        console.log(data);

        setCharacters(data.results)
        // Copmo el data es un objeto no me deja hacer el map, 
        // entonces si le añades el result se convierte en array de objeto 
        // y ya puedes iterarlo

    }

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center text-sucess">Example Fetch</h1>
            <ul className="list-group">
                {characters.map((iterator) => 
                     <li key={iterator.uid} className="list-group-item">{iterator.name}</li>
                )}
            </ul>
        </div>
    )
}