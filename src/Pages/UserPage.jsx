
import { useContext } from 'react';
import { userInfoContext } from './../Context';
import { useState } from 'react';

function UserPage(){
    const {userList,userInfo,setUserInfo,onList} = useContext(userInfoContext);
    const [a,setA]=useState({id:"",pw:"",grade:""});
    return<>
    <h1>{onList.id}님의 UserPage</h1>
    <h2>{onList.id}</h2>
    <h2>{onList.pw}</h2>

    </>
}
export default UserPage;