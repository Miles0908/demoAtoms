import React from 'react';
import styles from "@/pages/assets/MiniCardMenu/MinuCardMenu.module.scss"
interface MiniCardMenuProps {
    title: string;
    description?: string;
}

const MiniCardMenu: React.FC<MiniCardMenuProps> = ({ title }) => {
    return (
        <div className={styles.wrapperCard}>
            <div className={styles.card}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default MiniCardMenu;
