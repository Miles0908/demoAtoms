import content from "../../../../public/content.json"
import React, { useMemo } from 'react';
import styles from './Navbar.module.scss';
import { GoPerson } from "react-icons/go";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavigationTab from "../NavigationTab/NavigationTab";
import SectionTab from "../SectionTab/SectionTab";

const Navbar: React.FC = () => {
    const { navbar } = content;

    const topNavbarTemplate = useMemo(() => (
        <div className={styles.topNavbar}>
            <div className={styles.list}>
                <ul>
                    <li className={styles.contribute}>{navbar.contribute}</li>
                    <li className={styles.subscribe}>{navbar.subscribe}</li>
                </ul>
            </div>
            <div className={styles.login}>
                <ul>
                    <li><GoPerson /></li>
                    <li>{navbar.login}</li>
                </ul>
            </div>
            <div></div>
        </div>
    ), [navbar.contribute, navbar.login, navbar.subscribe]);

    return (
        <div className={styles.navbarWrapper}>
            <div>
                {topNavbarTemplate}
                <BurgerMenu/>
                <NavigationTab/>
                <SectionTab/>
            </div>
        </div>
    );
};

export default Navbar;
