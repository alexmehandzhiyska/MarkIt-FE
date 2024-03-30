import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/authService";

import "./Header.css";
import SideBar from "../sidebar/Sidebar";

const Header = ({widthScreenSize}) => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const navigate = useNavigate();

    const logout = () => {
        authService.logout()
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
            
        navigate('/');
    };

    return (
        <SideBar>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>

                    {!user &&
                        <>
                            <li><a href="/login">Login</a></li>
                        </>
                    }

                    {user && 
                        <>
                            <li><a onClick={logout}>Logout</a></li>
                        </>
                    }
                </ul>
            </nav>
        </SideBar>
    );
};

export default Header;