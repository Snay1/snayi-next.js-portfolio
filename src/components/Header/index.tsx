import { useEffect, useState } from 'react';
import s from './Header.module.scss';

import { IconSelector } from '../';

const Header = () => {

    const [isBlur, setIsBlur] = useState(false);

    useEffect(() => {

        const onScroll = () => {

            if (pageYOffset > 500) {
                setIsBlur(true);
            } else if (pageYOffset <= 500) {
                setIsBlur(false);
            }
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);

    }, [])

    return (
        <header className={`${s.header} ${isBlur ? s.blur : ''}`}>
            <div className={s.someContent}>

            </div>
            <div className={s.settings}>
                <IconSelector icon='settingsIcon' />
            </div>  
        </header>
    )
}

export default Header