import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

    const history = useHistory();

    const [data, sendData] = useState({})

    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, data, { [name]: value })
        sendData(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('userInfo', JSON.stringify(data))
        history.push('/login')
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='registerForm'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" className="form-control" onChange={handleChange} name='firstname' id="firstname" placeholder="Enter firstname"></input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" className="form-control" onChange={handleChange} name='lastname' id="lastname" placeholder="Enter lastname"></input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" onChange={handleChange} name='email' id="email" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" onChange={handleChange} name='password' id="password" placeholder="Enter password"></input>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup