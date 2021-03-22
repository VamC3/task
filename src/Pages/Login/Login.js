import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const history = useHistory();
    const [login, setLogin] = useState({})

    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, login, { [name]: value })
        setLogin(newData)
    }
    useEffect(() => {
        localStorage.setItem('isLogin', false)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const signupCredentials = JSON.parse(localStorage.getItem('userInfo'))
        if(signupCredentials.email === login.email && signupCredentials.password === login.password){
            localStorage.setItem('isLogin', true)
            return history.push('/dashboard');
        }
        alert('Please Check your credentials')
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" onChange={handleChange} name='email' id="exampleInputEmail1" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={handleChange} name='password' id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit"  className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login