import styles from "../HeroSection/HeroSection.module.scss"
import HeroCard from "../HeroCard/HeroCard";
import MidHeroCard from "../MidHeroCard/MidHeroCard";

const HeroSection: React.FC = () => {
    return (
        <div className={styles.HeroSectionWrapper}>
           <HeroCard/>
           <MidHeroCard/>
        </div>
    )
}

export default HeroSection
