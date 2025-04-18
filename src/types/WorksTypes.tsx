import { StaticImageData } from "next/image";

export interface IStackItem {
    title: string;
    image: StaticImageData;
}

export interface IWorkItem {
    title: string;
    images: Array<StaticImageData>;
    description?: string;
    stack?: Array<IStackItem>;
    link?: string;
}

export interface IOpenedInfo extends IWorkItem {
    gridItemWidth: number;
}

export interface IWorkItemProps extends IWorkItem {
    onClick: (el: HTMLLIElement | null) => void;
}

export interface IWorkItemsProps {
    items: IWorkItem[];
    index: number;
    openedIndex: number;
    setOpenedIndex: (index: number) => void;
}
