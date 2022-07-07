
import { useContext } from 'react';
import { userInfoContext } from './../Context';

function Main(){    
    const {onList,setOnList}=useContext(userInfoContext)
    return(
        <>
        <h1>Main</h1>
        {onList.legth>-1?<h2>{onList[1].id}</h2>:null}
        </>
    )
}
export default Main;