import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";

import { IStackItem } from "@/types/WorksTypes";

import image from "@/images/workItemBg.jpg";
import { reactIcon, reduxIcon, sassIcon } from "@/images/skillsImages";

type Work = {
    title: string;
    description: string;
    images: StaticImageData[];
    link: string;
    stack: IStackItem[];
};

const WorksApi = (req: NextApiRequest, res: NextApiResponse) => {
    const resItems = (): Work[] => {
        return [
            {
                title: "GetSport",
                description:
                    "GetSport: One platform for sports players, coaches, facility owners, massage therapists, and psychologists",
                images: [image],
                stack: [
                    {
                        title: "React.js",
                        image: reactIcon,
                    },
                    {
                        title: "SCSS",
                        image: sassIcon,
                    },
                    {
                        title: "Redux",
                        image: reduxIcon,
                    },
                ],
                link: "https://getsport.fi/",
            },
        ];
    };

    res.status(200).json(resItems());
};

export default WorksApi;
