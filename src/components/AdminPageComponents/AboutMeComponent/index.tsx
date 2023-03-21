import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './AboutMeComponent.module.scss';
import axios from '@/axios';

import { AdminTemplate, FormButton } from '@/components';
import { SyntheticEvent } from 'react';
import { API_IMAGES_LINK, API_LINK } from '@/constants';

interface IAboutData {
    image: string | null | undefined,
    text: string | null | undefined

}

const AboutMeComponent = () => {

    const imageRef = useRef<HTMLInputElement | null>(null);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IAboutData>({
        text: '',
        image: ''
    });

    const getAboutMe = async () => {
        await axios.get('/aboutMe').then(res => {
            const { data } = res;
            if (data.success) {
                setData({ text: data.result.text, image: data.result.image });
            }

        }).catch(e => console.warn(e));
        setLoading(false);
    }

    const selectImageHandler = () => {
        if (imageRef && imageRef.current) imageRef.current.click();
    }

    const updateHandler = (e: SyntheticEvent | null, text: string | null, image: string | null) =>  {
        
        if (e) {
            e.preventDefault();
        }

        if (loading) return;

        axios.post('/aboutMe', {
            text: text || data.text,
            image: image || data.image
        }).then(res => {
            console.log(res);
            getAboutMe();
        }).catch(e => console.log(e));
    }

    const updateImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {

            const formData = new FormData();

            const files = e.currentTarget.files;

            formData.append('images', files[0]);

            axios.post('/upload', formData).then(res => {
                const image = res.data.urls[0];
                setData({ ...data, image: image });
                updateHandler(null, null, image);
            }).catch(e => console.warn(e));
        }
    }

    useEffect(() => {
        getAboutMe();
    }, []);

    return (
        <AdminTemplate>
            <form className={s.form} onSubmit={(e) => updateHandler(e, null, null)} >
                <div className={s.textWrapper}>
                    <div className={s.selectImage} onClick={selectImageHandler}>
                        {
                            data.image ?
                                <img src={`${API_IMAGES_LINK}${data.image}`} alt={'Avatar'}/>
                            : ''
                        }
                        <input type="file" ref={imageRef} onChange={updateImageHandler} />
                    </div>
                    <textarea className={s.textArea} placeholder={'Text about me'} value={data.text || ''} onChange={e => setData({...data, text: e.target.value})}>
                    </textarea> 
                </div>       
                <FormButton text='Update' />       
            </form>
        </AdminTemplate>
    )
}

export default AboutMeComponent;
