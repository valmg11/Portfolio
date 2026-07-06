import project1 from '../assets/CMS.jpg'
import project2 from '../assets/chatPage.jpg'
import project3 from '../assets/todo.jpg'
import project4 from '../assets/exerciseApp.jpg'
import thrifted from '../assets/thrifted.png'



const projects = [
    {
        name: "CMS Game Review",
        date: "April 2026",
        desc: "This is a Content Management System project built with PHP and CSS where reviewers can input any video game to give it a review and a rating. The administators are able to delete these reviews."
    },
    {
        name: "fAInman",
        date: "October 2025",
        desc: "fAInman is an AI chatbot where the user teaches the AI a topic of choice in order to learn more. Being a group project, I was the front-end lead and designed the interface using HTML, CSS, and JavaScript."
    },
    {
        name: "To-Do List",
        date: "March 2026",
        desc: "This is a functional to-do list made with React Native Expo. Users are able to add new tasks, as well as mark these tasks as completed or incomplete."
    },
    {
        name: "Thrifted",
        date: "April 2026",
        desc: "Using User-Interface skills, a team and I created a functional prototype for a thrifting app using Figma. Thrifted is intended to help users more easily locate thrift stores for whatever their needs may be."
    },
     {
        name: "Exercise App",
        date: "April 2026",
        desc: "This exercise app was create with React and tracks 6 different exercises. Users can choose to train with a duration exercise, repetition exercise, or a strength exercise."
    }
]

function Projects(props) {
    return (
        <>
        <section id="projects">
            <div>
                <h2>{props.data[2]}</h2>
            </div>
            <div className="projectsDiv">
                <div className="project2">
                    <p className='projectTitle'>{projects[1].name}</p>
                    <p className="projectDate">{projects[1].date}</p>
                    <div className="project2Flex">
                        <p>{projects[1].desc}</p>
                        <img className="project2Img" src={project2} alt="fAInman"/>
                    </div>
                    <a href="https://github.com/jm19pa/Feynman-AI" target="_blank" rel="noopener noreferrer" className='projectDetails'>view project</a>
                </div>

                <div className="project1">
                    <p className='projectTitle1'>{projects[0].name}</p>
                    <p className="projectDate">{projects[0].date}</p>
                    <div className="project1Flex">
                        <img className="project1Img" src={project1} alt="Game Review CMS"/>
                        <p>{projects[0].desc}</p>
                    </div>
                    <a href="https://students.gaim.ucf.edu/~va717889/dig3134c/assignments/assignment04/login.php" target="_blank" rel="noopener noreferrer" className='projectDetails'>view project</a>
                </div>

                <div className="project4">
                    <p className='projectTitle'>{projects[3].name}</p>
                    <p className='projectDate'>{projects[3].date}</p>
                    <div className="project4Flex">
                        <p>{projects[3].desc}</p>
                        <img className="thrifted" src={thrifted} alt="Exercise App"/>
                    </div>
                    <a href="https://www.figma.com/proto/1A4ztdSGytBh8o8G66g4ik/Thrifted---Lab-9?node-id=2080-295&p=f&t=TyBEMzneUzGo7DtN-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2080%3A295" target="_blank" rel="noopener noreferrer" className='projectDetails'>view project</a>
                </div>
            
                <div className="project3">
                    <p className='projectTitle'>{projects[2].name}</p>
                    <p className='projectDate'>{projects[2].date}</p>
                    <div className="project3Flex">
                        <img className="project3Img" src={project3} alt="To-Do List"/>
                        <p>{projects[2].desc}</p>
                    </div>
                    <a href="https://valmg11.github.io/expo-todo-test/" target="_blank" rel="noopener noreferrer" className='projectDetails'>view project</a>
                </div>

                <div className="project3">
                    <p className='projectTitle'>{projects[4].name}</p>
                    <p className='projectDate'>{projects[4].date}</p>
                    <div className="project3Flex">
                        <p>{projects[4].desc}</p>
                        <img className="project4Img" src={project4} alt="Exercise App"/>
                    </div>
                    <a href="https://valmg11.github.io/Updated-Exercise-App/" target="_blank" rel="noopener noreferrer" className='projectDetails'>view project</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Projects;