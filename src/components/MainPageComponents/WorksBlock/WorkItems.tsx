import { useEffect, useState } from 'react';
import s from './WorksBlock.module.scss';
import { IOpenedInfo, IWorkItemsProps, IWorkItem } from '@/types/WorksTypes';

import WorkItem from './WorkItem';
import OpenedItem from './OpenedItem';

const WorkItems = ({items, setOpenedIndex, openedIndex, index}: IWorkItemsProps) => {

    const [openedInfo, setOpenedInfo] = useState<IOpenedInfo | null>(null);
    const [itemNumber, setItemNumber] = useState<number>(-1);

    const itemClickHandler = (item: IWorkItem, itemNumber: number, el: HTMLLIElement | null) => {

        setOpenedInfo({ ...item, gridItemWidth: el ? el.getBoundingClientRect().width : 0 });
        setItemNumber(itemNumber);

    }

    useEffect(() => {

        if (openedInfo) {
            setOpenedIndex(index);
        }

    }, [openedInfo]);

    useEffect(() => {

        if (openedIndex !== index) setOpenedInfo(null);
        
    }, [openedIndex])

    return (
        <>
        <ul className={`${s.items} _container`}>
            {
                items && items.map((item, index) => <WorkItem key={item.title} title={item.title} images={item.images} onClick={el => itemClickHandler(item, index + 1, el)}/>)
            }
        </ul>
        {
            openedInfo ? <OpenedItem info={openedInfo} itemNumber={itemNumber} /> : ''
        }
        </>
    )
}

export default WorkItems