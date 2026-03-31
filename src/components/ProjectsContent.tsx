import taskTracker from "../assets/task-tracker-cover-width.png";
import personalBlogCover from "../assets/personal-blog-cover.png";
import todoListMern from "../assets/todo-list-mern-cover.png";
import {LinkOutlined} from "@ant-design/icons";
import CustomProject from "./CustomProject.tsx";
import CustomLink from "./CustomLink.tsx";

const ProjectsContent = () => {
  return (
    <div className="projects-content-container">
      <CustomProject id="todo">
        <CustomProject.image>
          <img className="w-auto max-w-full h-auto" src={todoListMern} alt="Project 3 cover"/>
        </CustomProject.image>
        <div className="content-wrapper w-auto h-auto">
          <CustomProject.HeadingTagline>
            Project 1
          </CustomProject.HeadingTagline>
          <CustomProject.header>
            To-do List
          </CustomProject.header>
          <CustomProject.text>
            This project is a full-stack To-do List application built with the MERN stack
            (MongoDB, Express.js, React, Node.js). It has a user authentication system,
            allowing users to register, log in, and manage their tasks securely.
            The application features a responsive design.
            <br/>
            The application is deployed on Render (backend), Vercel (frontend) and
            MongoDB Atlas (database). For more details, you can check the
            GitHub repository.
          </CustomProject.text>
          <CustomProject.link link="https://github.com/patrik-bajzik/todo-list">
            <LinkOutlined/>
            <span>
              https://github.com/patrik-bajzik/ToDoListAPI
            </span>
          </CustomProject.link>
        </div>
      </CustomProject>
      <CustomProject id="personal-blog">
        <div className="content-wrapper w-auto h-auto">
          <CustomProject.HeadingTagline>
            Project 2
          </CustomProject.HeadingTagline>
          <CustomProject.header>
            Personal Blog
          </CustomProject.header>
          <CustomProject.text>
            This project is a full-stack web application developed with React,
            TypeScript, and Vite on the frontend, and Express.js with Node.js
            on the backend. It showcases basic blog functionality where content
            is stored and managed through a JSON file, simulating a lightweight
            database.
            <br/>
            Blog posts are dynamically generated from structured JSON data,
            allowing for simple content updates without a CMS. This project
            demonstrates my ability to build a functional, modular full-stack
            app using modern JavaScript technologies, ideal for small-scale
            personal projects or prototypes.
          </CustomProject.text>
          <CustomProject.link link="https://github.com/patrik-bajzik/Roadmap-backend/tree/master/personal-blog">
            <LinkOutlined/>
            <span>
              https://github.com/patrik-bajzik/Roadmap-backend/tree/master/personal-blog
            </span>
          </CustomProject.link>
        </div>
        <CustomProject.image>
          <img className="w-auto max-w-full h-auto" src={personalBlogCover} alt="Project 2 cover"/>
        </CustomProject.image>
      </CustomProject>
      <CustomProject id="task-tracker">
        <CustomProject.image>
          <img className="w-auto max-w-full h-auto" src={taskTracker} alt="Project 1 cover"/>
        </CustomProject.image>
        <div className="content-wrapper w-auto h-auto">
          <CustomProject.HeadingTagline>
            Project 3
          </CustomProject.HeadingTagline>
          <CustomProject.header>
            Task-tracker
          </CustomProject.header>
          <CustomProject.text>
            This project is a simple Task Tracker CLI application built with Go (Golang).
            It is designed to help you manage tasks through a command-line interface,
            ideal for backend-first project tutorials like those found on
            <CustomLink link="https://roadmap.sh/projects/task-tracker">
              roadmap.sh
            </CustomLink>
          </CustomProject.text>
          <CustomProject.link link="https://github.com/patrik-bajzik/Roadmap-backend/tree/master/task-tracker">
            <LinkOutlined/>
            <span>
              https://github.com/patrik-bajzik/Roadmap-backend/tree/master/task-tracker
            </span>
          </CustomProject.link>
        </div>
      </CustomProject>
    </div>
  );
};

export default ProjectsContent;