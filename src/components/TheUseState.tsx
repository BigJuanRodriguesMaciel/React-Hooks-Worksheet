import React, { useState } from 'react'

type Props = {}

export default function TheUseState({}: Props) {
    const [theState, setTheState] = useState<any>(
        {
            count: 1,
            theme: 'Dark'
        }
    )

    const increment = (theme:string) => {
        setTheState((prev:any) => {
            return {...prev, theme, count: prev.count++}
        })
    }

    return (
        <>
            <h1>changed: {theState?.count} times</h1>
            <h1>{theState?.theme}</h1>
            <button onClick={() => increment(theState?.theme === 'Light' ? 'Dark' : 'Light')}>Plus counter</button>
        </>
    )
}