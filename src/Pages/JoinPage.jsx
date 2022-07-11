
import { useContext, useEffect } from 'react';
import { userInfoContext } from './../Context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const PageTitle = styled.h2`
  color: green;
  font-size: 2em;
`;
const InputWrapper =styled.div`
    display: flex;
    width: 50vw;
    height: 20vh;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    border: solid 1px black;
`;
const JoinInput = styled.input`
    width: 15vw;

`;
const JoinBtn = styled.button`
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

`
function JoinPage(){
    const {userInfo,setUserInfo,userList,setUserList,onList}=useContext(userInfoContext);
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");
    const [rePassword,setRePassword]=useState("");
    const [idCheck,setIdCheck]=useState(false);
    const Navigate = useNavigate();


    const RePwTyping=(e)=>{
        setRePassword(e.target.value);
    }

    
    const IdCheck=(e)=>{
        e.preventDefault();
        if(userList.map((i)=>i.id).includes(userInfo.id)){
            alert("이미 사용중인 ID 입니다");
        }
        else{
            alert("사용가능한 아이디 입니다")
            setIdCheck(true);
        }
    }
    const Join=(e)=>{
        e.preventDefault();
        if(userInfo.pw!==rePassword){
            alert("password를 확인하세요")
           // e.preventDefault();
        }
        else if(idCheck===false){alert("id중복 확인하세요")}
        else{
            setUserInfo({id:id,pw:password});
            setUserList([userInfo,...userList]);
            alert("가입 완료")
            Navigate("/");
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserInfo((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    return<>
    <PageTitle>JoinPage</PageTitle>
    <form onSubmit={Join}>
    <InputWrapper>
    <JoinInput placeholder='Id' type='text' name="id" value={userInfo.id} onChange={handleChange}/>
    <JoinBtn onClick={IdCheck}>check</JoinBtn>
    <JoinInput type='password' placeholder='password' name="pw" value={userInfo.pw} onChange={handleChange}/>
    <JoinInput type='password' placeholder='repeat password' value={rePassword} onChange={RePwTyping}/>  
    <JoinBtn type='submit'>Join</JoinBtn>
    </InputWrapper>
    </form>    
    </>
}
export default JoinPage;