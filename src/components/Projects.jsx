import { PROJECTS } from "..";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:0.5}}
              className="w-full lg:w-1/4">
              <img src={Project.image} 
              width={150} 
              height={150} 
              alt={Project.title} 
              className="mb-6 rounded"
              />
            </motion.div>

            <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4">
              
              <h6 className="mb-2 font-semibold">
                {Project.title === "Simon game" ? (
                  <a href="https://yousefgibrahim.github.io/sam_game/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {Project.title}
                  </a>
                ) : Project.title === "BMI Calculator Website" ? (
                  <a href="https://yousefgibrahim.github.io/BMI_calculator/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {Project.title}
                  </a>
                ) : Project.title === "Cathedral's Website" ? (
                  <a href="https://www.stmark-kw.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {Project.title}
                  </a>
                ) : (
                  Project.title
                )}
              </h6>
              
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              
              {Project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
