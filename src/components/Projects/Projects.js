import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import Certifications from './Certifications'

import './Projects.css'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          The following are some of the projects I have undertaken recently:
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1732018843/Screenshot_2024-11-19_174817_lzappn.png"
              isBlog={false}
              title="Instagram"
              description="Instagram Clone Application is a social media platform developed using the MERN stack, replicating the core features of Instagram. It allows users to register and manage their profiles, create and share posts with images, like and comment on posts, and follow/unfollow other users. The platform also offers an explore page to discover trending content and includes real-time notifications for user engagement. Built with a responsive and modern interface, the application ensures smooth user interaction. The backend is hosted on Render, while the frontend is deployed on Vercel, delivering fast, reliable, and scalable performance."
              ghLink="https://github.com/saiteja-kolagani/Instagram-Clone.git"
              demoLink="https://instagram1429.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/djszbumd6/image/upload/v1725964867/Screenshot_2024-09-10_160848_elfktq.png"
              isBlog={false}
              title="InstantChat"
              description="InstantChat is a real-time communication platform developed using the MERN stack, enabling features like direct messaging, channel creation, user profile management, and file uploads, with a modern and intuitive interface. The backend is deployed on Render, while the frontend is hosted on Vercel to ensure reliable and fast communication."
              ghLink="https://github.com/saiteja-kolagani/InstantChat.git"
              demoLink="https://instant-chat-2-0.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/djszbumd6/image/upload/v1725070002/Screenshot_2024-08-31_073443_xbawpp.png"
              isBlog={false}
              title="Never Settle"
              description="Never Settle is a fully-featured eCommerce platform that I developed and redesigned using the MERN stack. The project includes a streamlined admin dashboard for managing products, orders, and users, along with a secure user registration and login system to provide a personalized shopping experience. I focused on creating an intuitive cart management system and efficient product management tools, all wrapped in a modern UI/UX design aimed at enhancing user engagement. The backend is robustly deployed on Render, while the frontend benefits from the speed and reliability of Vercel."
              ghLink="https://github.com/saiteja-kolagani/Never-Settle.git"
              demoLink="https://never-settle.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/djszbumd6/image/upload/v1724836931/Screenshot_2024-08-28_145148_wdteuv.png"
              isBlog={false}
              title="The Daily Blog"
              description="Developed a full-stack blogging platform using the MERN stack, featuring user authentication, post creation, editing, and deletion capabilities. Implemented JWT-based authentication for secure user sessions and role-based access control for post management. The platform includes a responsive user interface designed with React and Material-UI, supporting light/dark modes for enhanced accessibility across devices. The backend was deployed on Render, while the frontend was hosted on Vercel, utilizing SQLite for efficient data storage and management. Key technologies include React.js, Material-UI, React Router, JS-Cookie, React Loader Spinner, Node.js, Express.js, SQLite, JWT, bcrypt.js, dotenv, and date-fns."
              ghLink="https://github.com/saiteja-kolagani/The-Daily-Blog-Client.git"
              demoLink="https://thedailyblog.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/djszbumd6/image/upload/v1724838685/Screenshot_2024-08-28_152113_yabg9c.png"
              isBlog={false}
              title="The Task Management System"
              description="Developed a backend system for task management with user authentication and role-based access control using Node.js and Express.js. Implemented JWT-based authentication for secure user sessions and tailored task management features based on roles (Admin, Manager, Team Lead, Developer). The system supports task creation, retrieval, updating, and deletion, with advanced filtering by priority, status, and assigned user. Integrated SQLite with TypeORM for efficient data storage and database migrations. Deployed on Render for real-world accessibility and scalability. Key technologies include Node.js, Express.js, TypeORM, SQLite, JWT, bcrypt.js, dotenv, and Postman for API testing."
              ghLink="https://github.com/saiteja-kolagani/The-Daily-Blog-Client.git"
              demoLink="https://thedailyblog.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1721892822/Screenshot_2024-07-25_130207_e9mopg.png"
              isBlog={false}
              title="Notes App"
              description="Developed features for creating, updating, archiving, and deleting notes, including multi-tag support and background color customization. Integrated user registration and login with JWT authentication to ensure secure access and data protection. Deployed the application on Render with a cloud-based MongoDB Atlas database, providing robust and scalable data storage."
              ghLink="https://github.com/saiteja-kolagani/Apsona-Assignment.git"
              demoLink="https://apsona-assignment-405d.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719832626/Screenshot_2024-07-01_164616_nbw3vv.png"
              isBlog={false}
              title="Movies APP (Amazon Prime Clone)"
              description="Developed a Prime Video clone using React, React Slick, React Popup, and React Video Player. Utilized React Slick for dynamic and responsive carousels, implemented React Popup for interactive modal dialogs, and incorporated React Video Player for seamless video streaming. Demonstrated proficiency in integrating third-party packages to enhance functionality and user experience."
              ghLink="https://github.com/saiteja-kolagani/CP40-Prime-Video.git"
              demoLink="https://primevideosai19.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719832852/Screenshot_2024-07-01_164818_sfywzx.png"
              isBlog={false}
              title="WordLight (Wikipedia Clone)"
              description="Implemented local storage to retain and display the user's search history, enhancing personalized browsing. Integrated a theme switcher for effortless toggling between light mode and dark mode, providing a visually comfortable experience."
              demoLink="https://wordlight.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719835039/Screenshot_2024-07-01_172357_zsyyxg.png"
              isBlog={false}
              title="EasyFy"
              description="Created the Easyfy AI Gen Chatbot during a mega workshop organized by NXT Wave. Utilized technologies including Google Colab, LangChain, Gradio, PlayHt, Hugging Face, and OpenAI to develop this advanced chatbot."
              demoLink="https://easyfy.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719834390/Screenshot_2024-07-01_171547_asbf9z.png"
              isBlog={false}
              title="Emoji Game"
              description="Created an engaging Emoji Game with dynamic score tracking. Clicking an emoji increments the Score if it hasn't been clicked before. A 'Won Game' view appears if all emojis are clicked once, while a duplicate click triggers a 'Lose Game' view. The Top Score updates with higher scores, and a 'Play Again' button resets the Score but retains the Top Score."
              ghLink="https://github.com/saiteja-kolagani/CP18_REACT_Emoji-Game.git"
              demoLink="https://emojigames19.ccbp.tech/"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719833300/Screenshot_2024-07-01_165606_ue3dgg.png"
              isBlog={false}
              title="IPL Dashboard"
              description="Created an IPL Dashboard based on 2020 data, displaying scorecards for each team against their opponents. This project provides comprehensive insights into team performances, enhancing the understanding of match outcomes and team strategies."
              ghLink="https://github.com/saiteja-kolagani/ASSIGNMENT-4-IPL-Dashboard-App-REACT.git"
              demoLink="https://ipldashboards19.ccbp.tech/"
            />
          </Col>*/}
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <p style={{color: 'white'}}>
          The certifications I have earned are as follows:
        </p>
        <Certifications />
      </Container>
    </Container>
  )
}

export default Projects
