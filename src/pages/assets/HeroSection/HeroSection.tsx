import styles from "../HeroSection/HeroSection.module.scss"
import HeroCard from "../HeroCard/HeroCard";
import MidHeroCard from "../MidHeroCard/MidHeroCard";
import Blog from "../Blog/Blog";
import BotHeroCard from "../BotHeroCard/BotHeroCard";
import LastCard from "../LastCard/LastCard";

const HeroSection: React.FC = () => {
    return (
        <div className={styles.HeroSectionWrapper}>
           <HeroCard/>
           <MidHeroCard/>
           <Blog/>
           <BotHeroCard/>
           <LastCard/>
        </div>
    )
}

export default HeroSection
