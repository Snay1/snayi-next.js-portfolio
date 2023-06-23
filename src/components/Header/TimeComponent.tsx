import { useEffect, useState } from "react";
import s from "./Header.module.scss";

import { IconSelector } from "../";

const TimeComponent = () => {
    const [time, setTime] = useState("00:00");

    const getTimeHandler = () => {
        const date = new Date();
        const timezone = date.getTimezoneOffset();

        const myTimeZone = 180 * 60000;

        const myTime = new Date(
            Date.parse(date.toISOString()) - timezone * -60000 + myTimeZone
        );

        const timeNumberCheck = (number: number) =>
            `${number < 10 ? "0" : ""}${number}`;

        setTime(
            `${timeNumberCheck(myTime.getHours())}:${timeNumberCheck(
                myTime.getMinutes()
            )}`
        );
    };

    useEffect(() => {
        getTimeHandler();
    }, []);

    return (
        <div className={s.time}>
            <IconSelector icon="clockIcon" />
            <p>{time}</p>
        </div>
    );
};

export default TimeComponent;
