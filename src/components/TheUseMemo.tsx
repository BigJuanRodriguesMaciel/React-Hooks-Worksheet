import React, { useMemo, useState } from 'react'

type Props = {}

export default function TheUseMemo({}: Props) {

  //Utilizar apenas quando o problem estiver em performances, ou seja, temos uma funcao travando a aplicacao e incorrendo na performace 
  //Tomar cuidado porque custa espaco na memorio
  //Usando o hook useMemo conseguimos salvar em MEMORY e chamar a funcao apenas se houve alteracao no estado de algum elemento do array de dependencias
  // Diferente do useCallback, ele ira salvar o retorno da funcaoi em memoria e nao a funcao como o useCallback
  
  const slowFunction = (times:number) => {
    for (let i = 0; i < times; i++) {
      console.log('slowFunction is running')
    }
  }

  const [inputText, setInputText] = useState<any>()
  
  const anything = slowFunction(2)

  // const anything = useMemo(() => {
  //   return slowFunction(2)
  // }, [])

  return (
    <>
      <h1>{inputText}</h1>
      <input type="text" onChange={e => setInputText(e.target.value)}/>
    </>
  )
}