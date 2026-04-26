import project1 from '../assets/CMS.jpg'
import project2 from '../assets/chatPage.jpg'
import project3 from '../assets/todo.jpg'
import project4 from '../assets/exerciseApp.jpg'


const projects = [
    {
        name: "CMS Game Review",
        date: "April 2026",
        desc: "This is a CMS project built with PHP where reviewers can input video games they like and give it a review and a rating. The administators are able to delete these reviews."
    },
    {
        name: "fAInman",
        date: "October 2025",
        desc: "fAInman is an AI chatbot where the user teaches the AI a topic of choice in order to learn more. Being a group project, I was the front-end lead and designed the interface using HTML, CSS, and JavaScript."
    },
    {
        name: "To-Do List",
        date: "March, 2026",
        desc: "Created with React Native Expo, this to-do list users are able to create tasks as well as mark these tasks as completed by filling in the checkbox."
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
                <div className="project1">
                    < p className='projectTitle'>{projects[0].name}</p>
                    <p className="projectDate">{projects[0].date}</p>
                    <div className="project1Flex">
                        <img className="project1Img" src={project1} alt="Game Review CMS"/>
                        <p>{projects[0].desc}</p>
                    </div>
                </div>
                <div className="project2">
                    <a href="https://github.com/jm19pa/Feynman-AI" className='projectTitle'>{projects[1].name}</a>
                    <p className="projectDate">{projects[1].date}</p>
                    <div className="project2Flex">
                        <p>{projects[1].desc}</p>
                        <img className="project2Img" src={project2} alt="project 2"/>
                    </div>
                </div>
                <div className="project3">
                    <a href="https://valmg11.github.io/expo-todo-test/" className='projectTitle'>{projects[2].name}</a>
                    <p className='projectDate'>{projects[2].date}</p>
                    <div className="project3Flex">
                        <img className="project3Img" src={project3} alt="project 3"/>
                        <p>{projects[2].desc}</p>
                    </div>
                </div>
                <div className="project4">
                    <a href="https://valmg11.github.io/Updated-Exercise-App/" className='projectTitle'>{projects[3].name}</a>
                    <p className='projectDate'>{projects[3].date}</p>
                    <div className="project4Flex">
                        <p>{projects[3].desc}</p>
                        <img className="project4Img" src={project4} alt="project 2"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Projects;