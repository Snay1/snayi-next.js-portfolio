import { useEffect, useState } from "react";

import SkillsItemsComponent from "./SkillsItemsComponent";

import { skillsInitial, tabs } from "./settings";

import s from "./SkillsBlock.module.scss";

const SkillsBlock = () => {
    const [selected, setSelected] = useState(0);
    const [items, setItems] = useState(skillsInitial);

    const filterHandler = (value: number) => {
        if (value === 0) {
            setItems([...skillsInitial.filter((item) => item.isMain === true)]);
        } else {
            setItems([...skillsInitial]);
        }
    };

    useEffect(() => {
        filterHandler(selected);
    }, [selected]);

    return (
        <section className={`${s.skills}`}>
            <div className="_container">
                <div className={s.top}>
                    {
                    tabs && tabs.length ?
                        tabs.map((tab) => (
                            <h2
                                key={tab.title}
                                className={`${s.title} ${
                                    tab.value === selected ? "_title" : ""
                                }`}
                                onClick={() => setSelected(tab.value)}
                            >
                                {tab.title}
                            </h2>
                        )) : <></>
                    }
                </div>
                <SkillsItemsComponent
                    skills={items.filter((skill) => skill.knowledge === 4)}
                />
                <SkillsItemsComponent
                    skills={items.filter((skill) => skill.knowledge === 2)}
                />
                <SkillsItemsComponent
                    skills={items.filter((skill) => skill.knowledge === 1)}
                />
            </div>
        </section>
    );
};

export default SkillsBlock;
