import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import CardMenu from "@/pages/assets/CardMenu/CardMenu"
import content from "../../../../public/content.json"
import { CiSearch } from "react-icons/ci";
import MiniCardMenu from '../MiniCardMenu/MiniCardMenu';



const { menu } = content;

const menuItems = [
    { title: menu.articles , description: menu.articlesDesc },
    { title: menu.stories, description: menu.storiesDesc },
    { title: menu.interview, description: menu.interviewDesc },
    { title: menu.opinions, description: menu.opinionsDesc },
    { title: menu.podcast, description: menu.podcastDesc },
    { title: menu.bookazine, description: menu.bookazineDesc}
];

const MinimenuItems = [
    { title: menu.who  },
    { title: menu.editorialBoard},
    { title: menu.services},
    { title: menu.events },
    { title: menu.activism },
    { title: menu.crowdfunding}
];



const BurgerMenu: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.burgerMenuWrapper}>
             <div className={styles.menuIcons}>
                <div className={styles.menuButton} onClick={toggleMenu}>
                    {isMenuOpen ? <IoMdClose /> : <FiMenu />}
                </div>
                <div className={styles.separator}></div>
                {!isMenuOpen && (
                    <div className={styles.searchIcon}>
                        <CiSearch />
                    </div>
                )}
            </div>
            {isMenuOpen && (
                <div className={styles.menu}>
                    <div className={styles.menuContent}>
                        {menuItems.map((item, index) => (
                            <CardMenu key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                    <div className={styles.miniMenuContent}>
                    {MinimenuItems.map((item, index) => (
                        <div key={index} className={styles.miniMenuContentCard}>
                            <MiniCardMenu title={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
