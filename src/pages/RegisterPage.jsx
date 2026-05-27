import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import FormField from '../components/FormField';

const RegisterPage = () => {
    const {signup}  = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('')
    const [err, setErr] = useState({})
    const [loading, setLoading] = useState(false)
    const [apiErr, setApiErr] = useState('');

    function validateRegistrationFields() {
        const err= {};
        err.emailErr= validateEmail(email)
        err.passwordErr= validatePassword(password)
        err.usernameErr= validateUsername(name)
        err.confirmPasswordErr= validateConfirmPassword(password, confirm)
        
        return err;
    }

    async function handleSubmit(e){
        const err = validateRegistrationFields;

        if(Object.keys(err)>0){setErr(err)};

        setLoading(true);
        setApiErr('');

        try {
          await signup(name, email, password)
          navigate('/dashboard')
        } catch (error) {
            setApiErr(error)
        } finally{
            setLoading(false)
        }
    }
  return (
    <AuthCard
        title='Sign Up'
        subtitle='Create an account'
    >
        <form
            onSubmit={handleSubmit}
            noValidate
        >
            <FormField 
                label='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type='text'
                placeholder='Enter your name'
            />

            <FormField 
                label='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email'
                placeholder='Enter your email'
            />

            <FormField 
                label='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='text'
                placeholder=''
            />

            <FormField 
                label='Confirm Password'
                value={name}
                onChange={(e)=>setConfirm(e.target.value)}
                type='text'
                placeholder=''
            />

            <button type='submit'>Sign up</button>
        </form>

    </AuthCard>
  )
}

export default RegisterPage