
import { useContext } from 'react';
import { userInfoContext } from './../Context';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const PageTitle = styled.h2`
  color: green;
  font-size: 2em;
`;
const Greet = styled.h2`
    font-size: 2em;
`;
function Main(){    
    const {onList,userList}=useContext(userInfoContext);
    const {loginToggle}=useContext(userInfoContext);
    return(
        <>
        <PageTitle>Main</PageTitle>
        {loginToggle?<Greet>{onList.id} 님 환영합니다.</Greet>:<Greet>안녕하세요 가입해주세요</Greet>}
        <ul>
       {userList.map((i,n)=><li key={n}>{i.id}</li>)}
    </ul>
        </>
    )
}
export default Main;