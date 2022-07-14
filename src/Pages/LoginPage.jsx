import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoContext } from './../Context';
import styled from "styled-components";

const PageTitle = styled.h2`
  color: #00d167;
  font-size: 2em;
`;

const LoginBtn = styled.button`
    /* width: 15vw; */
     // background: $yellow;
     box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #2ecc71;
  border-radius: 0.6em;
  color: #2ecc71;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1;
  margin: 10px;
  padding: 1.0em 2.5em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  &:hover,
  &:focus {
    color:green;
    outline: 0;
  
  border-color: green;
  color:green;
  background: {
    image: linear-gradient(45deg,#2ecc71 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;
  background-position: 0;
}
  &:hover {
    
  }
`;


function LoginPage(){
    const {setUserInfo,userList,setOnList,onList,setLoginToggle}=useContext(userInfoContext);
    const [idLog,setIdLog]=useState();
    const [pwLog,setPwLog]=useState();
    const Navigate = useNavigate()
    const Login=(e)=>{
         if(idLog!==""&&pwLog!==""){
           
            if(userList.map((i)=>i.id).includes(idLog)){
            
            if(userList.map((i)=>{
                if(i.id===idLog){return i.pw}
            }).includes(pwLog)){
                e.preventDefault();
                userList.map((i)=>{if(i.id===idLog){setOnList(i);}});
                Navigate("/loginForm");

                setLoginToggle(true);
            }
            else{alert("암호를 확인하세요")}
            
            }
        else if(!userList.map((i)=>i.id).includes(idLog)){
        alert("존재하지않는 아이디입니다.");
            }
        }
        else if(idLog===""){
            alert("id를 입력하세요");
        }
        else if(pwLog===""){
            alert("암호를 입력하세요");
        }
        setIdLog("");
        setPwLog("");
    }
    return<>
    <PageTitle>LoginPage</PageTitle>
    <input value={idLog||""} placeholder="id" onChange={(e)=>{setIdLog(e.target.value)}}/>
    <input type="password"  value={pwLog||""} placeholder="pw" onChange={(e)=>{setPwLog(e.target.value)}}/>
    <LoginBtn onClick={Login}>Login</LoginBtn>
    </>
}
export default LoginPage;