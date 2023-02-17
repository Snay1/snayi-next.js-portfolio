import Image from 'next/image';
import s from './AboutMeBlock.module.scss';

import image from '@/images/about-img.png';

const AboutMeBlock = () => {
    return (
        <section className={`${s.about} _section`}>
            <div className={`${s.content} _container`}>
                <h2 className={`_title`}>about me</h2>
                <div className={s.info}>
                    <div className={s.img}>
                        <Image src={image} alt='About Image' />
                    </div>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum quae repellat quos distinctio eum fuga laudantium, non earum! Temporibus ipsum voluptas eveniet molestiae iure. Eligendi distinctio perspiciatis facere natus.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMeBlock