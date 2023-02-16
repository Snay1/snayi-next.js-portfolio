import { useEffect, useState } from 'react';
import s from './WorksBlock.module.scss';

import image from '@/images/workItemBg.jpg'

import nextIcon from '@/images/nextIcon.svg';


import WorkItems from './WorkItems';
import { IWorkItem } from '@/types/WorksTypes';

const WorksBlock = () => {

    const itemsInitial = [
        { 
            title: 'title1', 
            images: [image, image],
            description: 'some text', 
            stack: [
                {
                    title: 'next',
                    image: nextIcon
                },
                {
                    title: 'next',
                    image: nextIcon
                }
            ]
        },
        { title: 'title2', images: [ image], description: 'some text' },
        { title: 'title3', images: [image, image], description: 'some text' },
        { title: 'title4', images: [image, image], description: 'some text' },
        { title: 'title5', images: [image, image], description: 'some text' },
        { title: 'title6', images: [image, image], description: 'some text' },
        { title: 'title7', images: [image, image], description: 'some text' },
        { title: 'title8', images: [image, image], description: 'some text' },
        { title: 'title9', images: [image, image], description: 'some text' },
        { title: 'title10', images: [image, image], description: 'some text' },
    ]

    const [items, setItems] = useState<IWorkItem[][]>([]);
    const [openedIndex, setOpenedIndex] = useState(-1);

    const groupItemsHandler = () => {

        if (!itemsInitial) return;

        let colsNumber;

        const resultArray = [];

        if (window.innerWidth > 1320) {
            colsNumber = 3;
        } else if (window.innerWidth > 767) {
            colsNumber = 2;
        } else {
            colsNumber = 1;
        }

        for (let i = 0; i < itemsInitial.length; i += colsNumber) {
            
            const arrayItems = [...itemsInitial.slice(i, i + colsNumber)];

            resultArray.push(arrayItems)
        
        }

        setItems(resultArray);

    }

    useEffect(() => {

        groupItemsHandler();

        window.addEventListener('resize', groupItemsHandler);

        return () => window.removeEventListener('resize', groupItemsHandler);

    }, [])

    return (
        <section className={`_section`}>
                <h2 className={`_title _container`}>works</h2>
                {
                    items && items.map((item, index) => <WorkItems key={index} items={item} index={index} openedIndex={openedIndex} setOpenedIndex={setOpenedIndex} />)
                }
        </section>
    )
}

export default WorksBlock