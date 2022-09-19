import React, { useReducer } from 'react'

type Props = {}

export default function TheUseReducer({}: Props) {

    const reducer = (state:any, action:any) => {
        switch (action.type) {
            case 'increment':
                return {counter: state.counter + 1}
            case 'decrement':
                return {counter: state.counter - 1}
            break;
        
            default:
            return state
        }    
    }

    const reducerInitialValue = {
        counter: 0
    }

    const [state, dispatch] = useReducer(reducer, reducerInitialValue)

    return (
        <>
            <h1>count: {state?.counter}</h1>
            <div>
                <button 
                    style={{margin: 10}}
                    onClick={() => dispatch({type: 'increment'})}
                >Increment</button>
                <button 
                    style={{margin: 10}}
                    onClick={() => dispatch({type: 'decrement'})}
                >Decrement</button>
            </div>
        </>
    )
}