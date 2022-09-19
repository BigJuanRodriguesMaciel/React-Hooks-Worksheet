import React, { useEffect, useRef, useState } from 'react'

type Props = {}

//Guarda um valor como o useState, porem nao redenriza o elemento caso o valor mude como e o caso do useState()
// 1) referenciar elemento sem rerenderizar
// 2) interagir com elementos HTML
// 3) Armazenar um valor anterior de um State

export default function TheUseRef({}: Props) {

    const [text, setText] = useState("")
    const countRenders = useRef(0)
    // const countRenders = useRef<any>()

    const usingRef = useRef<any>()

    const doFocusInInput = () => {
        usingRef.current.focus()
    }

    useEffect(() => {
        countRenders.current = countRenders.current + 1
    })

    // useEffect(() => {
    //   return () => {
    //     countRenders.current = text
    //   }
    // }, [text])
    
    
    return (
        <>
            <h1>changeds: {countRenders.current} by {}</h1>
            
            <input ref={usingRef} type="text" id="input_1" onChange={ e => setText(e.target.value)} />
            <input type="text" id="input_2"  onChange={ e => setText(e.target.value)} />
            {/* <input type="text" id="input_3"  onChange={ e => setText(e.target.value)} /> */}
            <br />
            <button onClick={doFocusInInput}>Focar botao com useRef()</button>
        </>
    )
}