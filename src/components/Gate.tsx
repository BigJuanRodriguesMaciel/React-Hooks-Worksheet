import React, { useContext } from 'react'
import { routes } from '../constants/routes'
import { ThemeContext } from '../contexts/theme-context'

type Props = {}

export default function Gate({}: Props) {
    const getRouteName = (name:string) => {
        return name.replace(/[^\w ]/g, ' ').toUpperCase()
    }

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    routes.map((item) => {
                        return(
                            <a 
                            style={{
                                background: '#534BF9',
                                borderRadius: 10,
                                color: theme === 'dark' ? '#fff' : '#000',
                                padding: 20,
                                margin: 10,
                            }}
                                href={item} key={`route-${item}`}>
                                    {getRouteName(item)}
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}