import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import LoginPage from './Pages/LoginPage';
import JoinPage from './Pages/JoinPage';
import Main from './Pages/Main';
import { useContext } from 'react';
import { userInfoContext } from './Context';
import styled from "styled-components";
function Routers(){
    
    const StyleLink = styled(Link)`
        text-decoration: none;
        color: #00d167;
        font-size: 2em;
        width:50vw;
        height:8vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: whitesmoke;
            transition: 1s;
        }
    `;
    const LinkMenu = styled.ul`
        border: 1px solid black;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        height:30vh;
        width:50vw;
    `;
    
    const {loginToggle}=useContext(userInfoContext)
    
    return(
    <>
    <BrowserRouter>
    <LinkMenu>
        <StyleLink to="/loginForm">Home </StyleLink>
        {loginToggle?<StyleLink to="/loginForm/UserPage">User </StyleLink>:null}
        {loginToggle?null:<StyleLink to="/loginForm/Login">Login </StyleLink>}
        {loginToggle?null:<StyleLink to="/loginForm/Join">Join</StyleLink>}
        </LinkMenu>
    <Routes>
        
        <Route path="/loginForm" element={<Main/>}/>
        <Route path="/loginForm/UserPage" element={<UserPage/>}/>
        <Route path="/loginForm/Login" element={<LoginPage/>}/>
        <Route path="/loginForm/Join" element={<JoinPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default Routers;