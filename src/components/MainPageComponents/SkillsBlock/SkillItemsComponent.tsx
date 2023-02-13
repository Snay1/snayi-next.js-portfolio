import Image, { StaticImageData } from 'next/image';
import s from './SkillsBlock.module.scss';

interface ISkillItem {
    title: string,
    icon: StaticImageData,
    knowledge: number,
    isMain?: Boolean | undefined
}

interface ISkillItems {
    skills: Array<ISkillItem>;
}

const SkillItemsComponent = ({ skills }: ISkillItems) => {
    return (
        <ul className={s.items}>
        {
            skills && skills.map(skill => <li key={skill.title} className={s.item}>
                                            <div className={s.icon}>
                                                <div className={`${s.knowledge} ${skill.knowledge === 2 ? s.good : skill.knowledge === 1 ? s.bad : ''}`}></div>
                                                <Image src={skill.icon} alt={skill.title} />
                                            </div>
                                            <p>{skill.title}</p>
                                        </li>)
        }
    </ul>
    )
}

export default SkillItemsComponent