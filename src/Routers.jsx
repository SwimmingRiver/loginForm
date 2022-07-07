import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import LoginPage from './Pages/LoginPage';
import JoinPage from './Pages/JoinPage';
import Main from './Pages/Main';

function Routers(){
    return(
    <>
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/UserPage">User</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Join">Join</Link>
    
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