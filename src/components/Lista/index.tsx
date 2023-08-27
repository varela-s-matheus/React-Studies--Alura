import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item";

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:30:00'
    },{
        tarefa: 'TypeScript',
        tempo: '01:30:00'
    }])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                 
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                    {...item}
                    />
                ))} 
            </ul>
        </aside>
    )
}

export default Lista;