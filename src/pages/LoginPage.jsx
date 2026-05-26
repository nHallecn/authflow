import React, { useState } from 'react'
import {useAuth} from '..context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {validatePassword, validateEmail} from '../utils/validator';

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

    function handleSubmit(e){
        const err = validate();

        if(Object.keys(err).length() > 0) {setError(err)}

        setLoading(true);
        setApiError('');

        try {
            
        } catch (error) {
            
        }
    }


  return (
    <div>

    </div>
  )
}

export default LoginPage