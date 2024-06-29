import Ratings from "./ratings.tsx"
import { FC, ReactElement } from "react"
import Cards from "./cards"
import { useState } from "react"
import word from "../types/word"
type ContentProps={
    words:word[]
}
const Content:FC<ContentProps>=({words}): ReactElement=>{
    console.log(`${words.length} : from content`)
    const [revealed, setRevealed]=useState<boolean>(false)
    const [parentNext, setNext]=useState<boolean>(false)
    const callback=(r:boolean)=>{
        setRevealed(r)
    }
    return(
        <>
            <Cards callback={callback} next={parentNext} words={words}/>
            <div onClick={()=>{setNext(true); setTimeout(function(){setNext(false)}, 500)}}>
            {/* <div onClick={()=>{setNext(true); setTimeout(function(){setNext(false)}, 500)}}> */}
                <Ratings r={revealed}/>
            </div>
        </>
    )
}
export default Content