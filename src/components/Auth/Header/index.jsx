import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Contexts/AuthContext";
import { dosignOut } from "../../../Firebase/auth";

export const Header = () => {
    const navigate = useNavigate(); 
    const { UserLoggedIn } = UseAuth(); 

    return (
        <nav className="flex flex-row gap-x-2 w-full">
            {
                UserLoggedIn
                    ?
                    <>
                        <button onClick={() => { dosignOut().then(() => { navigate('/Login') }) }} className="text text-green-500">
                            Sign Out
                        </button>
                    </>
                    :
                    <>
                        <Link className="text-sm text-blue-600 underline" to={'/Login'}>Login</Link>
                        <Link className="text-sm text-blue-600 underline" to={'/Register'}>Register</Link>
                    </>
            }
        </nav>
    );
};
