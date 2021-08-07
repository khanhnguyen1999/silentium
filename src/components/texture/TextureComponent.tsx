import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';

type IContext = {
    path?:any
}
const TextureComponent = ({path}:IContext)=>{
    return (
        <div>{path.map((item:string,index:number)=>(<a>{index>0?<ArrowRight/>:""}<span className="chips">{item}</span></a>))}</div>
    )
}
export default TextureComponent