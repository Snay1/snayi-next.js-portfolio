import Image from 'next/image';
import s from './IntroduceBlock.module.scss';

import bg from '@/images/backgroud-image.png';
import avatar from '@/images/avatar.jpg';
import bottom from '@/images/intro-bottom.png';

const IntroduceBlock = () => {
    return (
        <section className={s.introduce}>
            <h1 className={s.title}>Snayi</h1>
            <div className={s.avatar}>
                <Image src={avatar} alt={'Avatar Image'} />
                <div className={s.status}>
                </div>
                <div className={s.statusText}>playing osu!</div>
            </div>
            <p className={s.subtitle}>
                Front-end Developer
            </p>
            <div className={s.bottom}>
                <Image src={bottom} alt={'Introduce background'} />
            </div>
            <div className={s.bg}>
                <Image src={bg} alt={'Introduce background'} />
            </div>
        </section>
    )
}

export default IntroduceBlock