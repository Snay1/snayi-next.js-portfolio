import { useEffect, useRef } from 'react';
import s from '../WorksBlock.module.scss';
import Image from 'next/image';

import { IOpenedInfo } from '@/types/WorksTypes';
import Slider from './Slider';

interface IOpenedItem {
    info: IOpenedInfo,
    itemNumber: number
}

const OpenedItem = ({info, itemNumber}: IOpenedItem) => {

    const contentRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);

    const arrowPositionHandler = () => {

        if (itemNumber === -1 || !contentRef.current || !arrowRef.current) return '';

        const windowWidth = window.innerWidth;
        const padding = windowWidth <= 1320 ? 16 : 0;
        const arrow = arrowRef.current;
        const itemWidth = info.gridItemWidth;
        const arrowWidth = arrow.getBoundingClientRect().width;

        arrow.style.left = `${(itemNumber * itemWidth + ((itemNumber - 1) * 38)) - (itemWidth / 2) - arrowWidth / 2 + padding}px`;

    }

    useEffect(() => {
        arrowPositionHandler();
    }, [itemNumber])

    return (
        <div className={s.openedItemWrapper}>
            <div className={s.openedItem}>
                <div className={`${s.content} _container`} ref={contentRef}>
                    <div className={s.arrow} ref={arrowRef}></div>
                    {
                        info.images ? 
                        
                        info.images.length > 1 ? 

                        <Slider images={info.images} title={info.title} />
                        
                        :
                        
                            <div className={s.img}>
                                <Image src={info.images[0]} alt={info.title} />
                            </div>

                        : ''
                    }
                    <div className={s.info}>
                        <div className={s.top}>
                            <h3>{info.title}</h3>
                            <ul className={s.stack}>
                                {
                                    info && info.stack && info.stack.map((item, index) => <li key={index}><Image src={item.image} alt={item.title} /></li>)
                                }
                            </ul>
                        </div>
                        <p className={s.text}>
                            {info.description}
                        </p>
                        <a className={`${s.button} button`} href={info.link} target='_blank' rel="noreferrer">go to site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenedItem