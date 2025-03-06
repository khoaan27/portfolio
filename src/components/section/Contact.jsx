import { useState } from "react"
import { RevealOnscroll } from "../RevealOnscroll"
import emailjs  from "@emailjs/browser"

export const Contact=()=>{
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    })
    const SERVICE_ID=import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID=import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY=import.meta.env.VITE_PUBLIC_KEY
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((res)=>{
            alert('Message Sent!')
            setFormData({name:'',email:'',message:''})
        }).catch(()=>alert('Something went wrong!Try Again'))
    }
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center relative ">
            <RevealOnscroll>
                <div className="px-4 w-150">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <p className="text-gray-300 w-full text-center mb-3">Your feedback is valuable to me. Every opinion you share will be sent to my email.</p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your name..." value={formData.name} 
                            onChange={(e)=>setFormData({...formData,name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="your_email@gmail.com" value={formData.email}
                            onChange={(e)=>setFormData({...formData,email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your message..." value={formData.message} 
                            onChange={(e)=>setFormData({...formData,message: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send
                            <i className="fa-solid fa-paper-plane mx-2 text-md -translate-y-0.5"></i>
                         </button>
                    </form>
                </div>
            </RevealOnscroll>
        </section>
    )
}