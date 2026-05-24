import profilePicture from "../assets/fotka-mna-anime-mikina.png";
import facebookIcon from '../assets/Logos/facebook-logo.svg';
import instagramIcon from '../assets/Logos/instagram-logo.svg';
import githubIcon from '../assets/Logos/github-logo.svg';

const Footer = () => {
    return (
        <div className="footer-container mx-auto w-full max-w-full">
            <div className="footer-text-wrapper flex flex-col items-center justify-center gap-y-5 border-t border-t-[#dfdad2] pt-[50px] pb-10  md:flex-row">
                <p className="text-xs h-[140%] text-footerGray lg:text-sm">© 2024 All Rights Reserved</p>
                <img className="mx-[30px] w-16 max-w-full text-sm rounded-2.5xl" src={profilePicture} alt="Profile picture"></img>
                <p className="text-xs text-footerGray lg:text-sm">DESIGNED WITH PRECISION</p>
            </div>
            <div className="footer-social-media-wrapper flex justify-center items-center gap-x-3 pb-[50px]">
                <div className="link-block">
                    <a className="flex justify-center items-center w-11 h-11" href="https://github.com/patrik-bajzik" target="_blank">
                        <img className="w-5 h-5 max-w-full lg:w-6 lg:h-6" src={githubIcon} alt="GitHub Icon"></img>
                    </a>
                </div>
                <div className="link-block">
                    <a className="flex justify-center items-center w-11 h-11" href="https://www.instagram.com/patrik.bajzik/" target="_blank">
                        <img className="w-5 h-5 max-w-full lg:w-6 lg:h-6" src={instagramIcon} alt="Instagram Icon"></img>
                    </a>
                </div>
                <div className="link-block">
                    <a className="flex justify-center items-center w-11 h-11" href="https://www.facebook.com/pato.bajzik/" target="_blank">
                        <img className="w-5 h-5 max-w-full lg:w-6 lg:h-6" src={facebookIcon} alt="Facebook Icon"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;