import React from 'react';
import styles from './BotHeroCard.module.scss';
import Image from 'next/image';
import content from "../../../../public/content.json";
import { IoMdArrowForward } from "react-icons/io";
import { HiMiniPause } from "react-icons/hi2";

const BotHeroCard: React.FC = () => {
    const { botHeroCards } = content;

    return (
        <div className={styles.botHeroCardWrapper}>
            {botHeroCards.map((card, index) => (
                <div key={index} className={`${styles.card} ${styles[`card${index + 1}`]}`} style={{ backgroundImage: `url(${card.backgroundImage})` }}>
                    <div className={styles.textOverlay}>
                        <p className={styles.category}>{card.category}</p>
                        {card.showAudioPlayer && (
                            <div className={styles.audioPlayer}>
                                <HiMiniPause />
                                <Image src="/soundwave.jpg" alt="Soundwave" width={250} height={50} fetchPriority='low' />
                                <span>-03:14</span>
                            </div>
                        )}
                        <h2>{card.title}</h2>
                        <div className={styles.profileIcon}>
                            <Image src={card.authorImage} alt={card.authorName} width={40} height={40} />
                            <div className={styles.description}>
                                <p>{card.authorName}</p>
                                <p>{card.date}</p>
                                {card.showIcon && <IoMdArrowForward />}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BotHeroCard;
