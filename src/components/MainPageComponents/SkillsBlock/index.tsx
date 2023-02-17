import { useEffect, useState } from 'react';
import s from './SkillsBlock.module.scss';

import jsIcon from '@/images/jsIcon.svg';
import sassIcon from '@/images/sassIcon.svg';
import reactIcon from '@/images/reactIcon.svg';
import reduxIcon from '@/images/reduxIcon.svg';
import nextIcon from '@/images/nextIcon.svg';
import mongoIcon from '@/images/mongoIcon.svg';
import tsIcon from '@/images/tsIcon.svg';
import nodeIcon from '@/images/nodeIcon.svg';
import dockerIcon from '@/images/dockerIcon.svg';
import expressIcon from '@/images/expressIcon.svg';

import SkillsItemsComponent from './SkillsItemsComponent';

const SkillsBlock = () => {

    const tabs = [
        { title: 'main skills', value: 0 },
        { title: 'all skills', value: 1 }
    ];

    const skillsInitial = [
        { title: 'Javascript', icon: jsIcon, knowledge: 4, isMain: true },
        { title: 'sass(scss)', icon: sassIcon, knowledge: 4, isMain: true },
        { title: 'react.js', icon: reactIcon, knowledge: 4, isMain: true },
        { title: 'redux (rtk)', icon: reduxIcon, knowledge: 4, isMain: true },
        { title: 'next.js', icon: nextIcon, knowledge: 4, isMain: true },
        { title: 'mongoDB', icon: mongoIcon, knowledge: 2 },
        { title: 'typescript', icon: tsIcon, knowledge: 2 },
        { title: 'node.js', icon: nodeIcon, knowledge: 1 },
        { title: 'docker', icon: dockerIcon, knowledge: 1 },
        { title: 'express', icon: expressIcon, knowledge: 1 },
    ]

    const [selected, setSelected] = useState(0);
    const [items, setItems] = useState(skillsInitial);

    const filterHandler = (value: number) => {

        if (value === 0) {
            setItems([...skillsInitial.filter(item => item.isMain === true)])
        }
        else {
            setItems([...skillsInitial])
        }
    }

    useEffect(() => {

        filterHandler(selected);

    }, [selected])

    return (
        <section className={`${s.skills} _section`}>
            <div className='_container'>
                <div className={s.top}>
                    {
                        tabs && 
                        tabs.map(tab => <h2 key={tab.title} className={`${s.title} ${tab.value === selected ? '_title' : ''}`} onClick={() => setSelected(tab.value)}>
                                            {tab.title}
                                        </h2>)
                    }
                </div>
                <SkillsItemsComponent skills={items.filter(skill => skill.knowledge === 4)} />
                <SkillsItemsComponent skills={items.filter(skill => skill.knowledge === 2)} />
                <SkillsItemsComponent skills={items.filter(skill => skill.knowledge === 1)} />
            </div>
        </section>
    )
}

export default SkillsBlock