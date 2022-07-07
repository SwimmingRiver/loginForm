import { useContext,useState } from "react";
import { userInfoContext } from './../Context';

function LoginPage(){
    const {userInfo,setUserInfo,userList,onList,setOnList}=useContext(userInfoContext);
    const [idLog,setIdLog]=useState("");
    const [pwLog,setPwLog]=useState("");
    const Login=(e)=>{
         if(idLog!==""&&pwLog!==""){
         if(userList.map((i)=>i.id).includes(idLog)){
            
            if(userList.map((i)=>{
                if(i.id===idLog){return i.pw}
            }).includes(pwLog)){
                e.preventDefault();
                const toLog = userList.map((i)=>{if(i.id===idLog){return i;}});
                setOnList([toLog]);
                console.log(onList);
                window.location.href = "/";// 로그인 완료시 메인 화면으로 이동
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
    <h1>LoginPage</h1>
    <input value={idLog} placeholder="id" onChange={(e)=>{setIdLog(e.target.value)}}/>
    <input value={pwLog} placeholder="pw" onChange={(e)=>{setPwLog(e.target.value)}}/>
    <button onClick={Login}>Login</button>
    </>
}
export default LoginPage;