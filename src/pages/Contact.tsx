import { DiscordOutlined, MailOutlined } from "@ant-design/icons";
import profilePicture from "../assets/fotka-mna-anime-mikina.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-wrapper">
        <Navbar />
        <div className="contact-page-content-container py-16 sm:py-20 md:py-24">
          <div className="contact-page-content-wrapper px-4 max-w-[1352px] md:px-6 mx-auto">
            <div className="text-content-container flex flex-col items-center gap-y-4 my-4">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                I Don't Byte!
              </h1>
              <p className="text-base lg:text-xl 2xl:text-2xl">console.log("Hello!");</p>
            </div>
            <div className="grid-layout grid grid-cols-1 grid-rows-1 items-stretch justify-stretch gap-x-10 gap-y-8 mt-16 mx-auto max-w-[400px] text-white w-full lg:grid-cols-2 lg:w-2/3 lg:max-w-none">

              {/* DISCORD */}
              <div className="contact-info-container flex flex-col items-center gap-y-4 bg-[#3f3f3f] rounded-xl px-6 py-10">
                <DiscordOutlined className="text-4xl" />
                <h2 className="font-medium text-xl">Write Me</h2>
                <p>patrik_bajzik</p>
              </div>

              {/* EMAIL */}
              <div className="contact-info-container flex flex-col items-center gap-y-4 bg-[#3f3f3f] rounded-xl px-6 py-10">
                <MailOutlined className="text-4xl" />
                <h2 className="font-medium text-xl">Mail Me</h2>
                <p>bajzik.patrik6@gmail.com</p>
              </div>

            </div>
          </div>
        </div>
        <div className="contact-footer-container w-full px-10 sm:px-[5vw] bg-[#fafafa]">
          <div className="contact-footer-wrapper py-24 w-auto lg:w-[90%]">
            <div className="inline-block mb-8">
              <Link to="/" className="flex items-center gap-x-5">
                <img className="w-14 max-w-full text-sm rounded-2.5xl lg:w-32" src={profilePicture} alt="Profile picture"></img>
                <h1 className="text-3xl font-extrabold lg:text-4xl 2xl:text-5xl">Personal Portfolio</h1>
              </Link>
            </div>
            <div className="footer-links-container flex flex-col py-5 text-gray-500 lg:flex-row">
              <a className="footer-links pb-1 mr-5 mb-5" href="https://www.instagram.com/patrik.bajzik/" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  Instagram
                </p>
              </a>
              <a className="footer-links pb-1 mr-5 mb-5" href="https://www.linkedin.com/in/patrik-bajzik/" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  LinkedIn
                </p>
              </a>
              <a className="footer-links pb-1 mr-5 mb-5" href="https://github.com/patrik-bajzik" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  GitHub
                </p>
              </a>
              <a className="footer-links pb-1 mr-5 mb-5" href="https://www.facebook.com/pato.bajzik/" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  Facebook
                </p>
              </a>
              <a className="footer-links pb-1 mr-5 mb-5" href="https://stackoverflow.com/users/18243115/patrik-bajz%c3%adk" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  Stack Overflow
                </p>
              </a>
              <a className="footer-links pb-1 mr-5 mb-5" href="https://codepen.io/patrik-bajzik" target="_blank">
                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                  CodePen
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;