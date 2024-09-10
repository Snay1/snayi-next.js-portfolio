import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";

import { IStackItem } from "@/types/WorksTypes";

import getsportLogo from "@/images/workImages/getsport/getsport-logo.jpg";

import { 
    reactStackItem, 
    reduxStackItem, 
    sassStackItem 
    } from "@/common/stackItems";

type Work = {
    title: string;
    description: string;
    images: StaticImageData[];
    link: string;
    stack: IStackItem[];
};

const WorksApi = (req: NextApiRequest, res: NextApiResponse) => {
    const resItems: Work[] = [
        {
            title: "GetSport",
            description:
                "GetSport: One platform for sports players, coaches, facility owners, massage therapists, and psychologists",
            images: [getsportLogo],
            stack: [
                reactStackItem,
                reduxStackItem,
                sassStackItem
            ],
            link: "https://getsport.fi/",
        },
    ];

    res.status(200).json(resItems);
};

export default WorksApi;
