import { RevealOnscroll } from "../RevealOnscroll"

export const About=()=>{
    const frontendSkill=['ReactJS','HTML/CSS','JavaScript']
    const iotSkill=['Arduino','Proteus','MPLAB','AltiumDesign']
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnscroll> 
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-center"> 
                    I am passionate about building interactive web applications while also exploring innovative IoT solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {frontendSkill.map((tech,i)=>(
                                    <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
                            <h3 className="text-xl font-bold mb-4">IoT</h3>
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {iotSkill.map((tech,i)=>(
                                    <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                        <div className="flex flex-row flex-wrap">
                            <i className="fa-solid fa-school mx-2 translate-y-1.25"></i>
                            <h3 className="text-xl font-bold">Education</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 my-1">
                            <li>
                                <strong>Computer Engineering</strong> - Hanoi University of Industry
                            </li>
                            <li>
                                Relevant Coursework: Computer Networks, Embedded Programming Engineering,...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <div className="flex flex-row flex-wrap">
                            <i className="fa-solid fa-briefcase mx-2 translate-y-1.5"></i>
                            <h3 className="text-xl font-bold">Work Experiences</h3>
                            <div className="space-y-4 text-gray-300 ">
                                <div>
                                    <h4 className="font-semibold">Developer Internship at <em>Solashi Holdings </em> (2024-now)</h4>
                                    <p className="mt-1">
                                        Gain hands-on experience to enhance my technical skills and prepare for my future career.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnscroll>
        </section>
    )
}