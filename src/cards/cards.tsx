import  {FC, ReactElement, useEffect} from 'react'
import { useState } from 'react'
import "./card.css"
import Card from "./card"
import word from '../types/word'
type EmptyProps={
    callback:Function
    next:boolean
    words:word[]
}
const Cards: FC<EmptyProps>=({callback, next, words}):ReactElement=>{
    console.log(`${words.length} from cards`)
    const [selection, setSelection]=useState(0)
    const [shown, setShown]=useState<boolean>(false)
    function handleClick(e: React.MouseEvent<HTMLElement>){
        e.preventDefault()
        setShown(!shown)
        callback(shown)
    }
    useEffect(()=>{
        if(next){
            setSelection(Math.floor(Math.random()*words.length))
            setShown(!shown)
            callback(shown)
        }
    }, [next])
    console.log(words[selection])
    return(
        <div onClick={handleClick}>
        <button className={`bg-bone ${next?"origin-top-right animate-shuffle":"origin-center"} px-48 py-20 rounded-lg transition active:scale-x-0 active:-translate-y-5 duration-75 shadow-3xl`} onClick={handleClick}>
            <Card eng={words[selection].eng} tag ={words[selection].tag} show={shown}/>
        </button>
        </div>
    )
}
export default Cards