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
        color: limegreen;
        font-size: 2em;
        border: solid 1px black;
        width:50vw;
        height:8vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
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
        <StyleLink to="/">Home </StyleLink>
        {loginToggle?<StyleLink to="/UserPage">User </StyleLink>:null}
        {loginToggle?null:<StyleLink to="/Login">Login </StyleLink>}
        {loginToggle?null:<StyleLink to="/Join">Join</StyleLink>}
        </LinkMenu>
    <Routes>
        
        <Route path="/" element={<Main/>}/>
        <Route path="/UserPage" element={<UserPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Join" element={<JoinPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default Routers;