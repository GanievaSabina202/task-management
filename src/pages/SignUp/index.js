import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
    })



    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    };

    const formValidate = () => {
        const { name, surname, email, username, password } = formData;
        const errors = {};
        if (name.trim() === '') {
            errors.name = "Ad bosdur"
        }
        if (surname.trim() === '') {
            errors.surname = "Soyad bosdur"
        }
        if (email.trim() === '') {
            errors.email = "Email bosdur"
        }
        if (username.trim() === '') {
            errors.username = "Username adı bosdur"
        }
        if (email.trim() === '') {
            errors.email = 'Email bosdur';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Format duzgun deyil';
        }

        return errors
    }


    const getSignupRequest = async () => {
        try {
            const response = await axios.post('https://646cf4697b42c06c3b2c548f.mockapi.io/task/v1/signup', formData);

            toast.success('You are successfully signed in', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });

            setTimeout(() => {
                navigate('/dashboard', { replace: true });
            }, 1700);

        } catch (error) {
            toast.error(error.response.data.Message, {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    }


    const handlerSubmit = (e) => {
        e.preventDefault();
        const errors = formValidate();

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            getSignupRequest();
        }
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handlerSubmit} style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Name"
                />
                <span>{errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}</span>

                <input
                    name='surname'
                    value={formData.surname}
                    onChange={handleChange}
                    className={errors.surname ? 'error' : ''}
                    placeholder='Surname'
                />
                <span>{errors.surname && <span style={{ color: 'red' }}>{errors.surname}</span>}</span>

                <input
                    name='email'
                    value={formData.email}
                    className={errors.email ? 'error' : ''}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <span>{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}</span>

                <input
                    name='username'
                    value={formData.username}
                    className={errors.username ? 'error' : ''}
                    onChange={handleChange}
                    placeholder='Username'
                />
                <span>{errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}</span>

                <input
                    name='password'
                    value={formData.password}
                    className={errors.password ? 'error' : ''}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <span>{errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}</span>
               
                <br />
                <button type='submit'>Ok</button>
            </form>
        </>
    )
}

export default Signup
