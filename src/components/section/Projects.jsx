import { useState, useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import quizImg from "../../assets/img/quiz.jpg";
import pokedexImg from "../../assets/img/pokedex.jpg";
import coffeeImg from "../../assets/img/caffee.jpg";
import ageCalImg from "../../assets/img/agecal.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Projects = () => {
    const [slidesPerView, setSlidesPerView] = useState(1); 
    const swiperRef=useRef(null)
    useEffect(() => {
        
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(2); 
            } else {
                setSlidesPerView(1); 
            }
        };     
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const projects = [
        {   
            title: "Quizz Web",
            des: "This is my very first project, a cloned version of quiz.com. It allows users to create, edit, delete, and search for questions.",
            image: quizImg,
            link: "https://quizz-game-psi.vercel.app/",
            tech: ["HTML", "CSS", "JavaScript", "BootstrapCSS"],
        },
        {   
            title: "Pokédex",
            des: "This website displays information about Pokémon, including their name, image, and skills, by fetching data from the PokéAPI.",
            image: pokedexImg,
            link: "https://pokedex-7a7q.vercel.app/",
            tech: ["ReactJS", "FantaCSS", "RESTful API"],
        },
        {   
            title: "Coffee Tracker",
            des: "A modern web app that allows users to log in and log out securely using Firebase authentication.",
            image: coffeeImg,
            link: "https://caffeeee-5n9b-khoa-ans-projects.vercel.app/",
            tech: ["ReactJS", "FantaCSS", "RESTful API", "Firebase"],
        },
        {
            title: "AgeCalculator",
            des: "The user inputs their birthdate via a JavaScript Datepicker, and the app calculates and displays their exact age.",
            image: ageCalImg,
            link: "https://age-calculator-six-iota.vercel.app/",
            tech: ["ReactJS", "TailwindCSS", "Luxon Library"],
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="relative">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",}}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        className="w-full"
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="max-w-md mx-auto p-4 rounded-xl border border-white/10 
                                    hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all mb-10 flex flex-col justify-between min-h-[434px]">
                                    <h3 className="text-xl font-bold mb-2">{i+1}. {project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.des}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.image} className="rounded mb-3 object-cover w-full max-h-[180px]" />
                                    </a>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="text-blue-400 transition-colors my-2 hover:text-blue-300"
                                        >View Project
                                            <i className="fa-solid fa-arrow-right mx-2 text-sm"></i>    
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                   
                    <div className="swiper-button-prev !left-2 sm:!left-[-60px] !top-1/2 !-translate-y-1/2 md:block hidden"></div>
                    <div className="swiper-button-next !right-2 sm:!right-[-60px] !top-1/2 !-translate-y-1/2 md:block hidden"></div>
                   {window.innerWidth < 1024 && slidesPerView===1 && ( <button
                        className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 border border-blue-500/50 bg-blue-500/10 text-white px-4 py-3 rounded-full cursor-pointer hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                    >
                        Next  ▶
                    </button>)}
                    
                </div>
            </div>
            
        </section>
    );
};
