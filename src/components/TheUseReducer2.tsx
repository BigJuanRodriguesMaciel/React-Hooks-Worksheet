import React, { useReducer, useState } from 'react'

type Props = {}

export default function TheUseReducer2({}: Props) {

    const reducer = (state:any, action:any) => {
        switch (action.type){
            case 'add-task':
            return {
                tasks: [
                    ...state.tasks,
                    {
                        name: action.payload,
                        isCompleted: false
                    },
                ],
                tasksCount: state.tasks.length + 1
            }  
            case 'change-task-state':
                return{
                    ...state,
                    tasks: state.tasks.map((item:any, index:any) => index === action.payload ? {...item, isCompleted: !item.isCompleted} : item)
                }  
        }
    }

    const reducerInitialValue = {
        tasks: [],
        tasksCount: 0
    }

    const [state, dispatch] = useReducer(reducer, reducerInitialValue)
    const [inputValue, setinputValue] = useState<any>()

    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={e => setinputValue(e.target.value)}/>
                <button 
                    style={{margin: 10}}
                    onClick={() => {
                        dispatch({type: 'add-task', payload:inputValue})
                        setinputValue('')
                    }}
                >Adicionar Task</button>
            </div>
            <div>
                tasks: {state?.tasksCount}
                <ul>
                    {
                        state?.tasks.map((item:any, index:any) => {
                            return(
                                <li key={index}>
                                    {item.name} 
                                    <button onClick={() => dispatch({type: 'change-task-state', payload:index})}>
                                        {item.isCompleted ? 'concluida' : 'pendente'}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}