import React from 'react';

const tasks = ['Escovar dentes', 'Tomar Café', 'Trocar de roupa', 'Academia', 'Almoçar', 'Trybe'];

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {tasks.map(task => <li>{ task }</li>)}
                </ul>
            </div>
        )
    }
} 

export default Tasks;

console.log(Tasks)