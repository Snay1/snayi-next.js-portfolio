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

export const tabs = [
    { title: "main skills", value: 0 },
    { title: "all skills", value: 1 },
];

export const skillsInitial = [
    { title: "Javascript", icon: jsIcon, knowledge: 4, isMain: true },
    { title: "sass(scss)", icon: sassIcon, knowledge: 4, isMain: true },
    { title: "react.js", icon: reactIcon, knowledge: 4, isMain: true },
    { title: "redux (rtk)", icon: reduxIcon, knowledge: 4, isMain: true },
    { title: "next.js", icon: nextIcon, knowledge: 4, isMain: true },
    { title: "mongoDB", icon: mongoIcon, knowledge: 2 },
    { title: "typescript", icon: tsIcon, knowledge: 2 },
    { title: "node.js", icon: nodeIcon, knowledge: 1 },
    { title: "docker", icon: dockerIcon, knowledge: 1 },
    { title: "express", icon: expressIcon, knowledge: 1 },
];
