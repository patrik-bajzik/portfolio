import { Button } from "antd";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-container py-20 min-[480px]:pt-24 min-[480px]:pb-10 relative z-0">
            <div className="main-container px-4 md:px-6">
                <div className="title-wrap-hero flex flex-col items-center gap-y-6">
                    <hr className="w-24 h-3 m-auto bg-gradient-to-r from-white to-black rounded-e-lg" />
                    <div className="w-full max-w-[1008px]">
                        <h2 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                            Hi! <br />
                            I'm Patrik Bajzík
                        </h2>
                    </div>
                    <div className="w-full max-w-[600px]">
                        <p className="text-center font-normal lg:text-xl 2xl:text-2xl">
                            I am a full stack programmer and software developer <br className="hidden sm:block 2xl:hidden" />
                            based in Slovakia.</p>
                    </div>
                    <div className="mt-4 lg:w-60 2xl:w-72">
                        <Button
                            className="flex justify-center items-center px-6 py-2 min-w-[200px] w-full h-[52px] bg-black text-white font-medium lg:px-8 lg:py-4 lg:h-16 lg:text-xl lg:rounded-xl 2xl:px-10 2xl:py-6 2xl:h-20 2xl:rounded-2xl 2xl:text-2xl hover:!bg-black/80 hover:!text-white"
                            value="Go to Contact">
                            <Link to="/contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;