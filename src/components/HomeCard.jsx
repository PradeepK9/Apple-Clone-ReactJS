import './HomeCard.css';

const HomeCard = (props) => {
    const data = props.cardData;
    const cardClass = data.backgound;
    console.log(" HomeCard rendred.....");

    return (
        <div className={`HomeCard ${cardClass}`}>
            {data.offerText &&
                <p className='Offer'>{data.offerText}</p>
            }
            <div className="CardHeading">
                {data.iconUrl &&
                    <img src={data.iconUrl} alt={data.iconAltText} />
                }
                <h2>{data.heading1}{data.heading2}</h2>
            </div>
            {data.series &&
                <p className='Series'>{data.series}</p>
            }
            <h4>{data.decription1}</h4>
            <p className='Decription2'>{data.decription2}</p>
            <div className="CardLinks">
                <a href="#">{data.link1}</a>
                {data.link2 &&
                    <a href="#">{data.link2}</a>}
            </div>
            {data.imgUrl &&
                <div className="CardImg">
                    <img src={data.imgUrl} alt={data.alt} />
                </div>}
            {data.videoUrl &&
                <div className='CardVideo'>
                    <video autoPlay loop muted>
                        <source src={data.videoUrl} />
                    </video>
                </div>}
        </div>
    )
}
export default HomeCard;