import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import CardPackage from "../../Components/Packet/CardPackage/CardPackage";
import "./style.css"



const Package = () => {

    const cookies = new Cookies()
    const auth = cookies.get("auth");

    // console.log(auth)

    const handleLogout = () =>{
        auth = cookies.set("auth", false)
        window.location.reload()
    }
    
    const navigate = useNavigate();
    const addPackages = () => {
        navigate("/addpackage")
    }
    
    
    return(
        <div className=" body_service">
            <div className="container service_content">
                <div className="card_packet">
                    {auth === "true" ? <Button variant="success" className="button_add" onClick={addPackages}>Add Packages</Button> : null}
                    {/* {auth == "false" ? <Button variant="success" className="button_add">Logout</Button> : null} */}
                    {' '}{auth === "true" ? <Button variant="secondary" className="button_delete" onClick={handleLogout}>Logout</Button> : null}
                    <CardPackage />
                </div>
            </div>
        </div>
    )
}
export default Package;