import IconSelector from '../IconSelector';
import s from './Footer.module.scss';

const Footer = () => {

    const socials = [
        { title: 'github', icon: 'githubIcon', link: 'https://github.com/Snay1' },
        { title: 'twitch', icon: 'twitchIcon', link: 'https://www.twitch.tv/snayi' },
    ]

    return (
        <footer className={s.footer}>
            <div className={`${s.content} _container`}>
                <p>© 2023</p>
                <ul className={s.socials}>
                    {
                        socials && socials.map(social => <li key={social.title}><a href={social.link} target='_blank' rel="noreferrer"><IconSelector icon={social.icon} /></a></li>)
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer