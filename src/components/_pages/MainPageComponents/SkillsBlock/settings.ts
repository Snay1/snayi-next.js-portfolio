import {
    jsIcon,
    sassIcon,
    reactIcon,
    reduxIcon,
    nextIcon,
    mongoIcon,
    tsIcon,
    nodeIcon,
    dockerIcon,
    expressIcon,
} from "@/images/skillsImages";
import { ISkillItem } from "@/types/SkillsTypes";

export const tabs = [
    { title: "main skills", value: 0 },
    { title: "all skills", value: 1 },
];

export const skillsInitial: ISkillItem[] = [
    { title: "Javascript", icon: jsIcon, knowledge: 4, isMain: true },
    { title: "sass(scss)", icon: sassIcon, knowledge: 4, isMain: true },
    { title: "react.js", icon: reactIcon, knowledge: 4, isMain: true },
    { title: "redux (rtk)", icon: reduxIcon, knowledge: 4, isMain: true },
    { title: "typescript", icon: tsIcon, knowledge: 4, isMain: true },
    { title: "next.js", icon: nextIcon, knowledge: 4, isMain: true },
    { title: "mongoDB", icon: mongoIcon, knowledge: 2, isMain: false },
    { title: "node.js", icon: nodeIcon, knowledge: 2, isMain: false },
    { title: "docker", icon: dockerIcon, knowledge: 2, isMain: false },
    { title: "express", icon: expressIcon, knowledge: 2, isMain: false },
];
