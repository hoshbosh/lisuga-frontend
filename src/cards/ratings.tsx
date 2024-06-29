import  {FC, ReactElement} from 'react'
import "./card.css"
type props={
    r: boolean
}
const Ratings: FC<props>=({r}):ReactElement=>{
    return(
      <div className={`transition ${r?'scale-0':''} flex space-x-5`}>
        <button className="rateButton transition hover:scale-110">Hard</button>
        <button className="rateButton transition hover:scale-110">Okay</button>
        <button className="rateButton transition hover:scale-110">Easy</button>
      </div>
    )
}
export default Ratings