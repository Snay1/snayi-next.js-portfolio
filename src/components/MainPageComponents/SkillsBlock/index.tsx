import { useState } from 'react';
import s from './SkillsBlock.module.scss';

import jsIcon from '../../../images/jsIcon.png';
import sassIcon from '../../../images/sassIcon.png';
import reactIcon from '../../../images/reactIcon.png';
import reduxIcon from '../../../images/reduxIcon.png';
import nextIcon from '../../../images/nextIcon.png';
import mongoIcon from '../../../images/mongoIcon.png';
import tsIcon from '../../../images/tsIcon.png';
import nodeIcon from '../../../images/nodeIcon.png';
import dockerIcon from '../../../images/dockerIcon.png';
import expressIcon from '../../../images/expressIcon.png';

import SkillItemsComponent from './SkillItemsComponent';

const SkillsBlock = () => {

    const tabs = [
        { title: 'skills', value: 0 },
        { title: 'all skills', value: 1 }
    ];

    const skillsInitial = [
        { title: 'Javascript', icon: jsIcon, knowledge: 4, isMain: true },
        { title: 'sass(scss)', icon: sassIcon, knowledge: 4, isMain: true },
        { title: 'react.js', icon: reactIcon, knowledge: 4, isMain: true },
        { title: 'redux (rtk)', icon: reduxIcon, knowledge: 4, isMain: true },
        { title: 'next.js', icon: nextIcon, knowledge: 2, isMain: true },
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

        setSelected(value);

    }

    return (
        <section className={`${s.skills} _section`}>
            <div className='_container'>
                <div className={s.top}>
                    {
                        tabs && 
                        tabs.map(tab => <h2 key={tab.title} className={`${s.title} ${tab.value === selected ? '_title' : ''}`} onClick={() => filterHandler(tab.value)}>
                                            {tab.title}
                                        </h2>)
                    }
                </div>
                <SkillItemsComponent skills={items.filter(skill => skill.knowledge === 4)} />
                <SkillItemsComponent skills={items.filter(skill => skill.knowledge === 2)} />
                <SkillItemsComponent skills={items.filter(skill => skill.knowledge === 1)} />
            </div>
        </section>
    )
}

export default SkillsBlock