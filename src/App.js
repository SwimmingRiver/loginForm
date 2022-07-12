import { useEffect, useState } from "react";
import Routers from "./Routers";
import { userInfoContext } from './Context';
import styled from "styled-components";

const Title =  styled.h1`
  color:  #00d167;
  font-size: 3em;
  margin-bottom: 10px;
`;
const Wrapper =styled.div`
  border: solid 15px  #00d167;
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  height: 80vh;
`;
const Wallpaper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#1b1b1b;
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
 <Wallpaper>
  <Wrapper>
  <Title>Login Form</Title>  
  <userInfoContext.Provider value={{userInfo,setUserInfo,userList,setUserList,onList,setOnList,loginToggle,setLoginToggle}}>
  <Routers/>
  </userInfoContext.Provider>
  </Wrapper>

 </Wallpaper>
  );
}

export default App;
