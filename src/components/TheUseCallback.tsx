import React, { useCallback, useEffect, useState } from 'react'
import ListPost from './sons/ListPost'

type Props = {}

export default function TheUseEffect({}: Props) {
    
    const [getType, setGetType] = useState('todos')
    const [text, setText] = useState<any>(null)
    
    useEffect(() => {
      getDatasAsync()
    }, [getType])

    useEffect(() => {
      // componentDidMount
      //Array vazio apenas 1x
      console.log('componentDidMount')
      return () => {
        // componentWillUnmount
        //Sempre que for ser 'desmontado' refresh por exemplo
        console.log('componentDidMount')
      }
    }, [getType])

    console.log(`renderizou novamente`)

    const getDatasFetch = () => {
        fetch(`https://jsonplaceholder.typicode.com/${getType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }

    // const getDatasAsync = async () => {
    //   const response = await fetch(`https://jsonplaceholder.typicode.com/${getType}`)
    //   return await response.json()
    // }

    //usando useCallback para evitar varias requisicoes haja vista a mudanca de estado

    const getDatasAsync = useCallback(
      async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${getType}`)
        return await response.json()
      },
      [], 
      
      // Listar o que quero observar para RECREAR a funcao caso constrario a funcao sera guardada em memoria
      // Diferente do useMemo, ele ira salvar a funcao em memoria e nao o retorno dela como o useMemo

    )

    const getters = ['todos','comments','posts',]
    
    return (
        <>
        {text && <h1>My name is {text}</h1>}
        <input type="text" onChange={ e => setText(e.target.value)}/>
        {
          getters.map((item, index) => {
            return (<button key={index} style={{margin: 10}} onClick={() => setGetType(item)}>{item.toUpperCase()}</button>)
          })
        }
        {
          <ListPost getDatasAsync={getDatasAsync}/>
        }
        </>
    )
}