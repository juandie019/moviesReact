import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
//components
import Button from './Button';
//styles
import { Wrapper } from './Login.styles';
//context
import { Context } from '../context';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
    const [, setUser] = useContext(Context); //when not using a variable mark whit _
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                userName,
                password
            )

            setUser({sessionId: sessionId.session_id, userName});
            navigate('/');
        } catch (error) {
            setError(true)
        }
    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        name === 'username' ? setUserName(value) : setPassword(value);
    };
    
    return (
        <Wrapper>
            {error && <div className='error'>There was an error*</div>}
            <label>Username: </label>
            <input
                type='text'
                value={userName}
                name='username'
                onChange={handleInput}
            />
            <input
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            <Button text='Login' callback={handleSubmit}></Button>
        </Wrapper>
    );
}

export default Login;