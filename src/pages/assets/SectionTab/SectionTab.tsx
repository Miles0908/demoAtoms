import styles from "../SectionTab/SectionTab.module.scss"
import content from "../../../../public/content.json"
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";

const { navigationTab } = content;

const NavigationTabItems = [
    { title: navigationTab.environment },
    { title: navigationTab.economy },
    { title: navigationTab.nonProfit },
    { title: navigationTab.politics },
    { title: navigationTab.society },
    { title: navigationTab.welfare },
];

const colors = [
    '#E2F1E8', '#FFFFFF', '#F1DADA', '#FFFFFF', '#F1F1E2', '#FFFFFF', '#FFFFFF'
];

const SectionTab: React.FC = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [selectedTab, setSelectedTab] = useState<string>(NavigationTabItems[0].title);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 792);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTabClick = (title: string) => {
        setSelectedTab(title);
    };

    return (
        <div className={styles.sectionTabWrapper}>
            <h1>{navigationTab.allThemes}
            {isMobile && <IoIosArrowDown className={styles.arrowIcon} />}
            </h1>
            <div className={styles.buttonContainer}>
                {NavigationTabItems.map((item, index) => (
                    <button
                        key={index}
                        className={styles.tabButton} 
                        onClick={() => handleTabClick(item.title)}
                        style={{ backgroundColor: colors[index % colors.length] }}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    )

}

export default SectionTab