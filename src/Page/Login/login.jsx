import React, {useState, useEffect} from "react"
import { LOGIN } from "../../Components/apolloClient/login/query";
import { useLazyQuery } from "@apollo/client";
import LoadingSvg from "../../Components/loading/loadingSvg";
import { Container, Row, Col } from "react-bootstrap";
import './style.css'
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [getLogin, {data, loading, error}] = useLazyQuery(LOGIN)
    const cookies = new Cookies()
    const [errMsg, setErrMsg] = useState('');
    
    const navigate = useNavigate()

    const setErrors = (name, message) => {
        setErrMsg((prev) => ({...prev, [name]: message}))
    }

    useEffect(() => {
        if(data?.login.length === 1){
            console.log("data", data);
            cookies.set("auth", true, { path: "/" })
            return(
                navigate("/")
            )
        }
    })

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        getLogin({variables: {
            _eq: username,
            _eq1: password
        }})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let valid = true;

        if (data.username.trim().length === 0) {
            setErrors("username", "Username tidak boleh kosong!");
            valid = false;
        }

        if (data.password.trim().length === 0) {
            setErrors("password", "Nama tidak boleh kosong!");
            valid = false;
        }
    }

    if(loading){
        return(
        <LoadingSvg />
        )
    }
    console.log(username + '' + password)
    return(
        <div className="login">
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <form className="contentLogin" onSubmit={handleSubmit}>
                        <h1>Form Login</h1>
                            <div className="mb-3 mt-3 label">
                                <label 
                                    for="namaLengkap" 
                                    style={{width:"100%", textAlign:"start", fontWeight:"bold"}}
                                    className="form-label">Username:
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="username"
                                    onChange={handleChangeUsername}
                                    minLength="3"
                                    maxLength="100" required />
                                <span className="mb-3 text-danger">{errMsg.username}</span> 
                            </div>
                            <div className="mb-3 mt-3 label">
                                <label 
                                    for="password" 
                                    style={{width:"100%", textAlign:"start", fontWeight:"bold"}}
                                    className="form-label">Password:
                                </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                    onChange={handleChangePassword}
                                    minLength="3"
                                    maxLength="100" required />
                                <span className="mb-3 text-danger">{errMsg.password}</span> 
                            </div>
                            
                            {data && <p className="msg">Username atau Password Salah</p>}
                            <input 
                            type="submit" 
                            className="btn btn-success mt-2"
                            value="Submit"
                            onClick={login} />
                        </form>
                    </Col>
                </Row>           
                
            </Container>
        </div>
    )
}
export default Login;