import { useState } from "react";
import Routers from "./Routers";
import { userInfoContext } from './Context';


function App() {
  const [userInfo,setUserInfo]=useState({id:"",pw:"",grade:"",name:""});
  const [userList,setUserList]=useState([
    {id:"one",pw:"1",grade:"1",name:"uno"},
    {id:"two",pw:"2",grade:"1",name:"dos"}
  ]);
  const [onList,setOnList]=useState([]);
  return (
 <>
  <h1>Login Form</h1>  
  <userInfoContext.Provider value={{userInfo,setUserInfo,userList,setUserList,onList,setOnList}}>
  <Routers/>
  </userInfoContext.Provider>
 </>
  );
}

export default App;
