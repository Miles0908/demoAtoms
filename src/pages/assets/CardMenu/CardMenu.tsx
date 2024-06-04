import React from 'react';
import styles from "@/pages/assets/CardMenu/CardMenu.module.scss"

interface CardMenuProps {
    title: string;
    description?: string;
}

const CardMenu: React.FC<CardMenuProps> = ({ title, description }) => {
    return (
        <div className={styles.card}>
            {description && <p>{description}</p>}
            <h3>{title}</h3>
        </div>
    );
};

export default CardMenu;
