import { useEffect, useState } from "react";
import Routers from "./Routers";
import { userInfoContext,StyleContext } from './Context';
import styled from "styled-components";

const Title =  styled.h1`
  color: limegreen;
  font-size: 3em;
  margin-bottom: 10px;
`;
const Wrapper =styled.div`
  border: solid 3px green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  height: 80vh;
`;

function App() {
  const [userInfo,setUserInfo]=useState({id:"",pw:"",grade:""});
  const [userList,setUserList]=useState([

  ]);
  const [onList,setOnList]=useState([]);
  const [loginToggle,setLoginToggle]=useState(false);
    //useEffect(()=>{setLoginToggle(!loginToggle)},[onList])
  const toLocalStorage=()=>{
    localStorage.setItem("userInfoList",JSON.stringify(userList));
  }
  useEffect(toLocalStorage,[userList]);
  return (
 <>
  <Wrapper>
  <Title>Login Form</Title>  
  <userInfoContext.Provider value={{userInfo,setUserInfo,userList,setUserList,onList,setOnList,loginToggle,setLoginToggle}}>
  <Routers/>
  </userInfoContext.Provider>
  </Wrapper>

 </>
  );
}

export default App;
