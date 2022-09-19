import React, { useEffect, useState } from 'react'

type Props = {}

export default function TheUseEffect({}: Props) {

  //Sera executado depois que o DOM estiver montado diferente do LayoutEffect que sera montado antes
    
    const [getType, setGetType] = useState('todos')
    
    useEffect(() => {
      getDatasFetch()
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
    }, [])
    

    const getDatasFetch = () => {
        fetch(`https://jsonplaceholder.typicode.com/${getType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }

    const getDatasAsync = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${getType}`)
      return response.json()
    }

    const getters = ['todos','comments','posts',]
    
    return (
        <>
        {
          getters.map(item => {
            return (<button style={{margin: 10}} onClick={() => setGetType(item)}>{item.toUpperCase()}</button>)
          })
        }
        </>
    )
}