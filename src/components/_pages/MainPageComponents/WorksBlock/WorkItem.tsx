import { useRef } from "react";
import Image from "next/image";
import s from "./WorksBlock.module.scss";

import { IWorkItemProps } from "@/types/WorksTypes";

const WorkItem = ({ title, images, onClick }: IWorkItemProps) => {
    const itemRef = useRef<HTMLLIElement | null>(null);

    return (
        <li
            className={s.item}
            onClick={() => onClick(itemRef.current)}
            ref={itemRef}
        >
            <div className={s.img}>
                {images && images.length > 0 ? (
                    <Image src={images[0]} width={400} height={200} alt={title} />
                ) : (
                    <></>
                )}
            </div>
            <h3>{title}</h3>
        </li>
    );
};

export default WorkItem;
