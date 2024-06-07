import styles from "../HeroSection/HeroSection.module.scss"
import HeroCard from "../HeroCard/HeroCard";
import MidHeroCard from "../MidHeroCard/MidHeroCard";
import Blog from "../Blog/Blog";

const HeroSection: React.FC = () => {
    return (
        <div className={styles.HeroSectionWrapper}>
           <HeroCard/>
           <MidHeroCard/>
           <Blog/>
        </div>
    )
}

export default HeroSection
