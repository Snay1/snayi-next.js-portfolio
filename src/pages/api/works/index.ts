import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";

import { IStackItem } from "@/types/WorksTypes";
import { STACK_ITEMS } from "@/common";

type Work = {
    title: string;
    description: string;
    images: string[];
    link: string;
    stack: IStackItem[];
};

const WorksApi = (req: NextApiRequest, res: NextApiResponse) => {
    const resItems: Work[] = [
        {
            title: "Bort Press",
            description:
                "Site for advertisers, advertising platforms and advertising agencies.",
            images: ["/images/bort-press/item-1.png"],
            stack: [
                STACK_ITEMS.REACT,
                STACK_ITEMS.TS,
                STACK_ITEMS.SASS,
                STACK_ITEMS.DOCKER,
                STACK_ITEMS.REACT_QUERY,
                STACK_ITEMS.ZUSTAND,
            ],
            link: "https://bort.press/",
        },
        {
            title: "GetSport",
            description:
                "GetSport: One platform for sports players, coaches, facility owners, massage therapists, and psychologists",
            images: ["/images/getsport/getsport-logo.jpg"],
            stack: [
                STACK_ITEMS.REACT,
                STACK_ITEMS.TS,
                STACK_ITEMS.REDUX,
                STACK_ITEMS.SASS,
            ],
            link: "https://getsport.fi/",
        },
    ];

    res.status(200).json(resItems);
};

export default WorksApi;
