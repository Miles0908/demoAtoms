import React from 'react';
import styles from './Footer.module.scss';
import content from "../../../../public/content.json";

const Footer: React.FC = () => {
    const { footerLinks, footerText } = content;

    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerLinks}>
                {footerLinks.map((link, index) => (
                    <a key={index} href="#" className={styles.footerLink}>{link}</a>
                ))}
            </div>
            <div className={styles.footerText}>
                {footerText}
            </div>
        </div>
    );
};

export default Footer;
