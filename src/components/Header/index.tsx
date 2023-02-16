import { useEffect, useState } from 'react';
import s from './Header.module.scss';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        if (isActive) {
            document.body.classList.add('_lock');
        } else {
            document.body.classList.remove('_lock');
        }

    }, [isActive])

    return (
        <>
        <header className={`${s.header} ${isActive ? s.active : ''}`}>
            <div className={s.content}>

            </div> 
        </header>
        <div className={s.burgerButton} onClick={() => setIsActive(!isActive)}>
            <span></span>
            <span></span>
            <span></span>
        </div> 
        </>
    )
}

export default Header