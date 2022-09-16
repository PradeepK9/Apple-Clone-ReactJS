import HomeBanner from './HomeBanner';
import data from '../db/data.json';

const BannerContainer = () => {
    const heroData = data.hero;
    console.log("BannerContainer rendered........");

    return (
        <>
            {
                heroData && heroData.map((item, index) => {
                    return <HomeBanner key={index} heroData={item} />
                })
            }
        </>
    )
}

export default BannerContainer;