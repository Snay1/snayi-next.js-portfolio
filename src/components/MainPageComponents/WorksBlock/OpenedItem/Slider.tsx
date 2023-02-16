import { useState, useRef, useEffect } from 'react';
import s from '../WorksBlock.module.scss';

import Image, { StaticImageData } from 'next/image';

import IconSelector from '@/components/IconSelector';

interface ISlider {
    images: Array<StaticImageData>,
    title: string
}

const Slider = ({images, title}: ISlider) => {

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const [currentImage, setCurrentImage] = useState(1);
    const [sliderScroll, setSliderScroll] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const setPrevHandler = () => {

        if (currentImage - 1 < 1) return;

        setCurrentImage(currentImage - 1);

    }

    const setNextHandler = () => {

        if (currentImage + 1 > images.length) return;

        setCurrentImage(currentImage + 1);

    }

    const sliderHandler = () => {

        if (!sliderRef || !sliderRef.current) return;

        console.log(sliderRef.current.getBoundingClientRect().width)

        const sliderWidth = sliderRef.current.getBoundingClientRect().width;

        setSliderScroll(sliderWidth * (currentImage - 1));
        setSliderWidth(sliderWidth);

    }

    useEffect(() => {

        sliderHandler();

        window.addEventListener('resize', sliderHandler);

        return () => window.removeEventListener('resize', sliderHandler);

    }, [currentImage]);

    return (
        <div className={s.slider} ref={sliderRef}>
            <button className={s.left} disabled={currentImage <= 1} onClick={setPrevHandler}><IconSelector icon='arrowIcon' /></button>
            <button className={s.right} disabled={currentImage >= images.length} onClick={setNextHandler}><IconSelector icon='arrowIcon' /></button>
            <div className={`${s.counter} ${currentImage > 1 ? s.active : ''}`}>{`${currentImage}/${images.length}`}</div>
            <div className={s.imagesWrapper} style={{ transform: `translateX(-${sliderScroll}px)` }}>
                {
                    images && images.map((image, index) => <Image key={index} src={image} alt={title} style={{ minWidth: `${sliderWidth}px`, maxWidth: `${sliderWidth}px` }} />) 
                }
            </div>
        </div>
    )
}

export default Slider