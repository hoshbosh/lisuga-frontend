import  {FC, ReactElement} from 'react'
import "./card.css"
type CardProps={
    eng: string, 
    tag: string,
    show: boolean,
}
const Card: FC<CardProps>=({eng, tag, show}):ReactElement=>{
    console.log(eng)
    return(
        <div className='text-3xl'>
        {show?eng: tag}
        </div>
    )
}
export default Card