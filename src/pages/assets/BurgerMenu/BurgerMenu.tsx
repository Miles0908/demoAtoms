import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { FiMenu } from 'react-icons/fi'; // Import an icon for the burger menu

const BurgerMenu: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.burgerMenuWrapper}>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <FiMenu />
            </div>
            {isMenuOpen && (
                <div className={styles.menu}>
                    <div className={styles.menuContent}>
                        <div>Articoli</div>
                        <div>Storie</div>
                        <div>Interviste</div>
                        <div>Opinioni</div>
                        <div>Podcast</div>
                        <div>Bookazine</div>
                        {/* Add other menu items as needed */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
