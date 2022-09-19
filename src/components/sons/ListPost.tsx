import React, { useEffect, useState } from 'react'

type Props = {}

export default function ListPost({getDatasAsync}: any) {
    
    const [posts, setPosts] = useState<any>()
    
    useEffect(() => {
        return () => {
            getDatasAsync().then((result:any) => setPosts(result))
            
        }
    }, [getDatasAsync])


    return (
    <>
        {
            posts && posts.map((item:any, index:any) => {
                return(
                    <li key={index}>{item.title}</li>
                )
            })
        }
    </>
    )
}