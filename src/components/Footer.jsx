import './Footer.css';

const Footer = () => {
    console.log("Footer rendred.....");

    return (
        <div className="Footer">
            <p>Copyright © 2022 developed by <span className='Owner'>💥 Pradeep Jaiswal 💥</span> </p>
            <div className="FooterLinks">
                <a href="#">Terms of Use</a>
                <a href="#">Sales and Refunds</a>
                <a href="#">Legal</a>
                <a href="#">Site Map</a>
                <a href="#">Privacy Policy</a>
            </div>
            <p>❤ India ❤</p>
        </div>
    );
}

export default Footer;