import { StaticImageData } from "next/image";

export interface ISkillItem {
    title: string;
    icon: StaticImageData;
    knowledge: number;
    isMain: boolean;
}

export interface ISkillItems {
    skills: Array<ISkillItem>;
}
