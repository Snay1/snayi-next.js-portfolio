import s from './ContactBlock.module.scss';

import Image from 'next/image';

import contactImg from '@/images/contact-bg.png';
import avatar from '@/images/smallAvatarImage.png';
import tgIcon from '@/images/telegramIcon.svg';
import discordIcon from '@/images/discordIcon.svg';

const ContactBlock = () => {

    const alternativeItems = [
        {
            title: 'telegram',
            icon: tgIcon,
            link: '???'
        },
        {
            title: 'discord',
            icon: discordIcon,
            link: '???'
        }
    ]

    const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className={`${s.contact} _section`}>
        <div className={`${s.content} _container`}>
            <h2 className={`_title`}>contacts</h2>
            <div className={s.wrapper}>
                <div className={s.contactItems}>
                    {/* <div className={s.status}>
                        <div className={s.statusImg}>
                            <Image src={avatar} alt='Avatar' />
                        </div>
                        <p className={s.statusText}>currently online</p>
                    </div> */}
                    {/* <form className={s.contactForm} onSubmit={submitHandler}>
                        <div className={s.row}>
                            <input type="text" placeholder='name' autoComplete='off' />
                            <input type="text" placeholder='surname' autoComplete='off' />
                        </div>
                        <input type="email" placeholder='email' />
                        <button  className={`${s.button} button`}>send</button>
                    </form> */}
                    <p className={s.alternativeText}>find me here</p>
                    <ul className={s.alternativeItems}>
                        {
                            alternativeItems && alternativeItems.map(item => <li key={item.title}><a href={item.link}><Image src={item.icon} alt={item.title} /></a></li>)
                        }
                    </ul>
                </div>
                <div className={s.img}>
                     <Image src={contactImg} alt='Contact Image' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactBlock