import styles from "../HeroSection/HeroSection.module.scss"

import content from '../../../../public/content.json';
import HeroCard from "../HeroCard/HeroCard";

// const { heroSection } = content;

const HeroSection: React.FC = () => {
    return (
        <div className={styles.HeroSectionWrapper}>
           <HeroCard/>
        </div>
    )
}

export default HeroSection
