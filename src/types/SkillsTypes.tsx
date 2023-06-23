import { StaticImageData } from "next/image";

export interface ISkillItem {
    title: string;
    icon: StaticImageData;
    knowledge: number;
    isMain?: Boolean | undefined;
}

export interface ISkillItems {
    skills: Array<ISkillItem>;
}
