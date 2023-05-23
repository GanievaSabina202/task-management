import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('');

    const requestForLogin = async () => {
        try {
            const response = await axios.post('https://646cf4697b42c06c3b2c548f.mockapi.io/task/v1/login', {
                userName,
                password,
            })
            toast.success('You are successfully signed in', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            localStorage.setItem('user', JSON.stringify({
                userName: response.data.userName, password: response.data.password
            }));

            setTimeout(() => {
                navigate('/dashboard', { replace: true })
            }, 1700);

        } catch (error) {
            toast.error(error.response.data.Message, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        if (!userName.trim() && !password.trim()) {
            setLoginError('Please enter both username and password');
        } else if (!userName.trim()) {
            setLoginError('Please enter a username');
        } else if (!password.trim()) {
            setLoginError('Please enter a password');
        }
        else {
            requestForLogin()
        }
    }



    return (
        <>
            <ToastContainer />
            <p>{loginError}</p>
            <form onSubmit={handlerSubmit}>
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Username'
                    type='text' />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    type='text' />
                <button type='submit'>Sign in</button>
            </form>
        </>
    )
}

export default Login