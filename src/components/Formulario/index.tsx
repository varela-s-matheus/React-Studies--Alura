import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Itarefa } from '../../types/tarefa';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>}> 
{    
    state = {
        tarefa: "",
        tempo: "00:00"
    }
   
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
        console.log('state: ', this.state);
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma tarefa
                    </label>
                    <input 
                        type="text" 
                        name='tarefa' 
                        id='tarefa' 
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                        placeholder='O que você quer estudar' 
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1" 
                        name='tempo' 
                        value={this.state.tempo} 
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
                        id='tempo' 
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                    />
                </div>
                <Botao type="submit" texto='Adicionar'/>
            </form>
        )
    }
}

export default Formulario;