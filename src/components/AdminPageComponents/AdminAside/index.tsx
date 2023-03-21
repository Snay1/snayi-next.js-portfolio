import Link from 'next/link';
import s from './AdminAside.module.scss';

const AdminAside = () => {

    const items = [
        { text: 'about me', value: 'about-me' },
        { text: 'works', value: 'works' },
        { text: 'technologies', value: 'technologies' },
    ]

    return (
        <div className={s.aside}>
            <h1>Admin</h1>
            <ul className={s.items}>
                {
                    items.map(item => <li key={item.value}><Link href={`/admin/${item.value}`}>{item.text}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default AdminAside