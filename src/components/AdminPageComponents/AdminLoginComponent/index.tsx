import { SyntheticEvent, useState } from 'react';

import axios from '@/axios';

import s from './AdminLoginComponent.module.scss';
import { FormButton } from '@/components';

const AdminLoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        axios.post('/auth/login', {
            email,
            password
        }).then(res => {
            const data = res.data;

            if (data.success) {
                window.localStorage.setItem('snayi-portfolio-token', data.result.token);
                document.location.reload();
            }

        }).catch(e => console.warn(e));

    }

    return (
        <div className={s.loginBlock}>
            <form className={s.form} onSubmit={submitHandler}>
                <h2>Login</h2>
                <div className={s.line}></div>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} autoComplete='off' />
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} autoComplete='off' />
                <FormButton text='login' />
            </form>
        </div>
    )
}

export default AdminLoginComponent