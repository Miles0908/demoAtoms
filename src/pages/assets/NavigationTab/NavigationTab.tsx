import styles from "@/pages/assets/NavigationTab/NavigationTab.module.scss";
import React from 'react';
import content from "../../../../public/content.json"
import { GoTypography } from "react-icons/go";
import { HiOutlinePhotograph } from "react-icons/hi";



const { navigationTab } = content;

const NavigationTabItems = [
    { title: navigationTab.allThemes },
    { title: navigationTab.environment},
    { title: navigationTab.economy},
    { title: navigationTab.nonProfit },
    { title: navigationTab.politics },
    { title: navigationTab.society},
    { title: navigationTab.welfare},
];



const NavigationTab: React.FC = () => {
    return (
        <div className={styles.NavigationTabWrapper}>
                <div className={styles.list}>
                        {NavigationTabItems.map((item, index ) => (
                            <h4 key={index}>{item.title}</h4>
                        ))}
                </div>
                <div className={styles.icons}>
                    <GoTypography/>
                    <HiOutlinePhotograph/>
                </div>
        </div>
    );
};

export default NavigationTab;
