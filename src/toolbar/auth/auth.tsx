import { FC, ReactElement } from "react";
import { useState } from "react";
type props={
}
const Auth: FC<props>=({}):ReactElement=>{
    const [clicked, setClicked]=useState(false)
    return(
        <button className="bg-bone" onClick={()=>{setClicked(!clicked)}}>
            {(clicked? "sign in":"create user")}
        </button>
    )
}
export default Auth