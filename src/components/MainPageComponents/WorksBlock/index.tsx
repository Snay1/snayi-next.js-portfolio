import { useEffect, useState } from "react";

import WorkItems from "./WorkItems";
import { IWorkItem } from "@/types/WorksTypes";

import axios from "axios";

const WorksBlock = () => {
    const [itemsInitial, setItemsInitial] = useState<IWorkItem[]>([]);
    const [items, setItems] = useState<IWorkItem[][]>([]);
    const [openedIndex, setOpenedIndex] = useState(-1);

    const groupItemsHandler = () => {
        if (!itemsInitial || !itemsInitial.length) return;

        let colsNumber;

        const resultArray = [];

        if (window.innerWidth > 1320) {
            colsNumber = 3;
        } else if (window.innerWidth > 767) {
            colsNumber = 2;
        } else {
            colsNumber = 1;
        }

        for (let i = 0; i < itemsInitial.length; i += colsNumber) {
            const arrayItems = [...itemsInitial.slice(i, i + colsNumber)];

            resultArray.push(arrayItems);
        }

        setItems(resultArray);
    };

    const getItems = async () => {
        if (items && items.length) {
            return;
        }

        const res = await axios.get("/api/works").catch((e) => {
            console.warn(e);
            setItemsInitial([]);
        });

        if (!res || !res.data) {
            return setItemsInitial([]);
        }

        setItemsInitial(res.data);
    };

    useEffect(() => {
        getItems();

        groupItemsHandler();

        window.addEventListener("resize", groupItemsHandler);

        return () => window.removeEventListener("resize", groupItemsHandler);
    }, [itemsInitial]);

    return (
        <section className={`_section`}>
            <h2 className={`_title _container`}>works</h2>
            {items &&
                items.map((item, index) => (
                    <WorkItems
                        key={index}
                        items={item}
                        index={index}
                        openedIndex={openedIndex}
                        setOpenedIndex={setOpenedIndex}
                    />
                ))}
        </section>
    );
};

export default WorksBlock;
