
import { useContext } from 'react';
import { userInfoContext } from './../Context';
import { useState } from 'react';
function JoinPage(){
    const {userInfo,setUserInfo,userList,setUserList}=useContext(userInfoContext);
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");
    const [rePassword,setRePassword]=useState("");
    const [name,setName]=useState("");
    const IdTyping =(e)=>{
        setId(e.target.value);
    }
    const PwTyping =(e)=>{
        setPassword(e.target.value);
    }
    const RePwTyping=(e)=>{
        setRePassword(e.target.value);
    }
    const NameTyping=(e)=>{
        setName(e.target.value);
    }
    
    const IdCheck=(e)=>{
        e.preventDefault();
        if(userList.map((i)=>i.id).includes(id)){
            alert("이미 사용중인 ID 입니다");
        }
        else{alert("사용가능한 아이디 입니다")}
    }
    const Join=(e)=>{
        e.preventDefault();
        if(password!==rePassword){
            alert("password를 확인하세요")
            e.preventDefault();
        }
        else{
            setUserInfo({...userInfo,id:id,pw:password,name:name});
            setUserList([...userList,userInfo]);
            console.log(userList);
            alert("가입 완료")
        }
    }
    return<>
    <h1>JoinPage</h1>
    <form>
    <input placeholder='Id' onChange={IdTyping}/>
    <button onClick={IdCheck}>check</button>
    <input placeholder='password'onChange={PwTyping}/>
    <input placeholder='repeat password' onChange={RePwTyping}/>
    <input placeholder='name' onChange={NameTyping}/>    
    <button onClick={Join}>Join</button>
    </form>    
    </>
}
export default JoinPage;