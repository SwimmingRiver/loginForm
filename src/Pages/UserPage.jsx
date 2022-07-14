
import { useContext } from 'react';
import { userInfoContext } from './../Context';
import styled from 'styled-components';

const Title =  styled.h1`
  color:  #00d167;
  font-size: 2em;
  margin-bottom: 10px;
`;
const UserPageContents = styled.h2`
    color:white;
`;
const UserPageWrapper=styled.div`
    height: 20vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;


function UserPage(){
    const {onList} = useContext(userInfoContext);
    return<>
    <Title>{onList.id}님의 UserPage</Title>
   <UserPageWrapper>
    <UserPageContents>id:{onList.id}</UserPageContents>
    <UserPageContents>pw:{onList.pw}</UserPageContents>
    </UserPageWrapper>
    </>
}
export default UserPage;