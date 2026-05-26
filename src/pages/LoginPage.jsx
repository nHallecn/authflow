import React, { useState } from 'react'
import {useAuth} from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import {validatePassword, validateEmail} from '../utils/validator';
import AuthCard from '../components/AuthCard';
import FormField from '../components/FormField';

const LoginPage = () => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemeber] = useState(false);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiErr, setApiError] = useState('');

    function validate(){
        const err = {};
        const emailErr = validateEmail(email);
        const passErr = validatePassword(password);
        err.email = emailErr;
        err.password = passErr;

        return err;
    }

    async function handleSubmit(e){
        e.preventDefault()
        const err = validate();

        if(Object.keys(err).length > 0) {setError(err)}

        setLoading(true);
        setApiError('');

        try {
            await login(email, password);
            navigate("/dashboard")
        } catch (error) {
            setApiError(error);
        } finally{
            setLoading(false);
        }
    }


  return (
    <AuthCard 
        title='Login Page'
        subtitle='Login to your account.'
    >
        <form onSubmit={handleSubmit} noValidate>

            {apiErr && <div>{apiErr}</div>}
            <FormField 
                label='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your email'
                type={email}
            />

            <FormField 
                label='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter your password'
                type='text'
            />
            <label>
                <input 
                    type='checkbox'
                    onChange={(e)=>setRemeber(e.target.checked)}
                />
                Remember Me
            </label>

            <button type='submit'>Log in</button>

            <p>Don't have an accout? <Link to='/register'>Signup</Link></p>
        </form>

    </AuthCard>
  )
}

export default LoginPage