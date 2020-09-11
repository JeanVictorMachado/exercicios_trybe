import React from 'react';
import Greeting from './Greeting';
import Image from './Image';
import Table from './Table';

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Greeting name="Samuel" lastName="Machado" />
            <Image source="catReact.jpg" alternativeText="Cute cat staring" />
            <br />
            <Table />
        </div>
    ); 
}

export default App;
