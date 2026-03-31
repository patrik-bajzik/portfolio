import taskTracker from '../assets/task-tracker-cover-height.png';
import personalBlogCover from "../assets/personal-blog-cover.png";
import todoListMern from "../assets/todo-list-mern-cover.png";
import {useNavigate} from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <div className="projects-padding-container px-[5%]">
        <div className="projects-width-container w-full max-w-[1280px] mx-auto">
          <div className="projects-wrapper py-16 lg:pt-16 lg:pb-28">
            <div className="projects-flex-container flex flex-col items-center ">

              {/* Container for Text */}
              <div className="heading-wrapper mb-16 w-full max-w-[768px]">
                <h2 className="mx-0 mb-5 font-bold text-4xl text-center 2xl:text-5xl">My projects</h2>
                <p className="text-center 2xl:text-xl">
                  Larger scale projects and my endeavour need
                  to be presented. Some of them are from school,
                  some from ideas or boredom.</p>
              </div>

              {/* Grid Container for Images */}
              <div className="gallery-grid-wrapper grid grid-cols-1 grid-rows-2 gap-6 justify-center items-stretch w-full
                                md:grid-cols-2 md:grid-rows-2 md:gap-8">

                {/* First image taking full height of the first column */}
                <div
                  className="gallery-box-container row-span-2 box-border w-full h-full hover:cursor-pointer"
                  onClick={() => navigate("/projects#task-tracker")}
                >
                  <div className='gallery-box-wrapper box-border w-full h-full max-w-full'>
                    <img className="w-full h-full max-w-full object-cover" src={taskTracker} alt="Github Projects"></img>
                  </div>
                </div>

                {/* Second image (Top Right) */}
                <div
                  className="gallery-box-container box-border w-full h-auto hover:cursor-pointer"
                  onClick={() =>
                    navigate({
                      pathname: "/projects",
                      hash: "#personal-blog"
                    })}
                >
                  <div className='gallery-box-wrapper box-border w-full max-w-full aspect-[16/9] border-4'>
                    <img className="w-full h-full max-w-full" src={personalBlogCover} alt="Roadmap Projects"></img>
                  </div>
                </div>

                {/* Third image (Bottom Right) */}
                <div
                  className="gallery-box-container box-border w-full h-auto hover:cursor-pointer"
                  onClick={() => navigate("/projects#todo")}
                >
                  <div className='gallery-box-wrapper box-border w-full max-w-full aspect-[16/9] border-4'>
                    <img className="w-full h-full max-w-full" src={todoListMern} alt="On-going Projects"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;