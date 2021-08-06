import React from 'react'

type IContext = {
    context?:string
}
const TextureComponent = ({context}:IContext)=>{
    return (
        <div>{context}</div>
    )
}
export default TextureComponent