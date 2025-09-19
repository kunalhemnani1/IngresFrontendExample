"use client";

import React, { useState, useEffect, useRef, useContext } from 'react';
import type { FC, ReactNode, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Card,CardHeader,CardTitle,CardFooter,CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import ThemeContext from './_Contxets/ThemeProvider';

import InputPromptArea from '@/components/Chat/InputPrompt/InputTextArea';

import Aurora from '@/components/Aurora';
import TextType from "@/components/TextType"
import SmallChat from '@/components/SmallChat/smallchat';
import GoogleTranslate from '@/components/GoogleTranslate/googletranslate'


const IconWrapper: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 ${className}`}>
        {children}
    </div>
);

const Sun: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const Moon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const MessageCircleQuestion: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
    </svg>
);

const DatabaseZap: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /><path d="m13 22 5-5-5-5" />
    </svg>
);

const BarChart3: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
    </svg>
);

const Languages: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
);

const Landmark: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <line x1="3" x2="21" y1="22" y2="22" /><line x1="6" x2="6" y1="18" y2="11" /><line x1="10" x2="10" y1="18" y2="11" /><line x1="14" x2="14" y1="18" y2="11" /><line x1="18" x2="18" y1="18" y2="11" /><polygon points="12 2 20 7 4 7" />
    </svg>
);

const Users: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const TestTube: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" /><path d="M8.5 2h7" /><path d="M14.5 16h-5" />
    </svg>
);


// --- Motion-enabled Component (for scroll animations) ---
const MotionDiv: FC<{ children: ReactNode; className?: string; }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return <div ref={ref} data-motion className={className}>{children}</div>;
};


// --- Theme Toggle Component ---
const ThemeToggle: FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
    <Button onClick={toggleTheme} variant="ghost" className="px-2">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </Button>
);


// --- Page Sections ---

const Header: FC<{ theme: string; toggleTheme: () => void; botpageclick:()=>void}> = ({ theme, toggleTheme ,botpageclick}) => (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-bold text-xl text-slate-900 dark:text-white">JalMitra</span>
            </a>
            <div className="flex items-center gap-4">
                 <nav className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
                    <a href="#impact" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Impact</a>
                    <a href="#about" className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                </nav>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Button className="hidden md:inline-flex px-5 py-2"
                    onClick={botpageclick}
                >Launch ChatBOT</Button>
            </div>
        </div>
    </header>
);

const HeroSection = ({botpageclick}:{botpageclick:()=>void}) => {
    async function sendPrompt(prompt:string) {
        if (prompt.trim()) {
            // Navigate to chat page with prompt as URL parameter
            const encodedPrompt = encodeURIComponent(prompt.trim());
            window.location.href = `/chat?prompt=${encodedPrompt}`;
        } else {
            botpageclick()
        }
    }
    const [prompt,setPrompt] = useState("");
    return (<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 {hero-gradient} bg-transparent overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <MotionDiv className="max-w-4xl mx-auto">
                {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6">
                    Unlock India's Groundwater Data Instantly
                </h1> */}
                <TextType
                    text={["Unlock India's Groundwater Data Instantly"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    loop={true}
                    deletingSpeed = {30}
                    variableSpeed={0}
                    textColors={["#fffff"]}
                    onSentenceComplete={()=>{}}
                    
                    className='text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6'
                />
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-secondry">
                    Meet the JalMitra ChatBOT: Your intelligent assistant for accessing India's dynamic groundwater resources. Ask in any language, get answers in seconds.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <Button className="px-8 py-4 text-lg" onClick={()=>{botpageclick()}}>Get Started</Button>
                    <Button variant="outline" className="px-8 py-4 text-lg">Learn More</Button>
                </div>
            </MotionDiv>

            <MotionDiv className="relative mt-16 md:mt-24 max-w-3xl mx-auto">
                 <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 space-y-4 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50">
                    <div className="flex justify-center">
                        {/* <div className="bg-primary  text-white rounded-lg p-3 max-w-xs">
                            Show me the groundwater status for Jaipur district for 2023.
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg p-3 max-w-md">
                            Certainly. The status for Jaipur District is 'Over-Exploited'. I am generating a chart with the historical trend...
                        </div> */}
                        <h1 className='text-3xl dark:text-neutral-400
                         my-2 font-bold text-neutral-500'>  Welcome back! What water data are you looking for today? 📊
 </h1>
                    </div>
                    <div className='flex gap-1'>
                        <InputPromptArea value={prompt} onChange={(e)=>{setPrompt(e.target.value)}} sendPrompt={async ()=>{sendPrompt(prompt)}} disabled={false}></InputPromptArea>
                    </div>

                </div>
            </MotionDiv>
            
        </div>
    </section>
)};

const FeaturesSection = () => (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
            <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Powerful Features at Your Fingertips</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    From complex queries to multilingual support, the JalMitra is built to make groundwater data accessible to everyone.
                </p>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: MessageCircleQuestion, title: "Intelligent Query Handling", description: "Ask complex questions in plain language. Our AI understands your intent and fetches the precise data you need." },
                    { icon: DatabaseZap, title: "Real-time Data Access", description: "Get instant access to the latest annual assessments and historical data, directly from the official INGRES database." },
                    { icon: BarChart3, title: "Interactive Visualizations", description: "Go beyond numbers. The chatbot generates interactive diagrams and charts to help you visualize trends and patterns." },
                    { icon: Languages, title: "Multilingual Support", description: "Communicate in your preferred language, including major Indian regional languages, for truly accessible information." },
                    { icon: Landmark, title: "Seamless Integration", description: "Deeply integrated with the core INGRES system, ensuring the data you receive is accurate, reliable, and up-to-the-minute." },
                    { icon: Users, title: "Built for All Users", description: "Whether you're a policymaker, researcher, or a concerned citizen, get the insights you need in a format you can understand." },
                ].map((feature, i) => (
                    <MotionDiv key={i} >
                        <Card className="feature-card h-full bg-slate-50 dark:bg-slate-800">
                            <CardHeader className="items-center text-center">
                                <IconWrapper><feature.icon /></IconWrapper>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </MotionDiv>
                ))}
            </div>
        </div>
    </section>
);


const ImpactSection = () => (
    <section id="impact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/70">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <MotionDiv>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Empowering Informed Decisions for a Sustainable Future</h2>
                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                        By simplifying access to complex groundwater data, the JalMitra ChatBOT bridges the gap between scientific information and actionable insights, fostering better water management for all.
                    </p>
                    <div className="mt-8 space-y-6">
                        {[
                            {icon: Landmark, title: "For Planners & Policymakers", desc: "Develop sustainable water management strategies with quick access to critical data on extraction levels and resource availability."},
                            {icon: TestTube, title: "For Researchers & Academics", desc: "Accelerate your research with easy retrieval of historical data series and support for complex, multi-variable queries."},
                            {icon: Users, title: "For the General Public", desc: "Stay informed about the vital water resources in your local area, promoting community awareness and conservation efforts."}
                        ].map(item => (
                            <div key={item.title} className="flex items-start space-x-4">
                                <IconWrapper className="flex-shrink-0"><item.icon /></IconWrapper>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionDiv>
                <MotionDiv className="hidden lg:block">
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                        <img  src="/mapvis.png" alt="Map visualization of groundwater data" className="rounded-xl w-full h-auto"/>
                    </div>
                </MotionDiv>
            </div>
        </div>
    </section>
);


const AboutSection = () => {
    const openNewTab = () => {
        window.open("https://ingres.iith.ac.in/gecdataonline/gis/", "_blank", "noopener,noreferrer");
      };
    return (
    
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <MotionDiv>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">A Collaborative Initiative</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    The Assessment of Dynamic Ground Water Resources of India is an annual effort by the Central Ground Water Board (CGWB) and State/UT Ground Water Departments. The INGRES system, upon which this AI is built, is a product of collaboration between CGWB and IIT Hyderabad.
                </p>
                <div className="mt-8">
                         <Button variant="outline" className="px-8 py-3" onClick={openNewTab}>Visit INGRES Portal</Button>
                </div>
            </MotionDiv>
        </div>
    </section>
)};

const Footer = () => (
    <footer className="bg-slate-800 dark:bg-black text-slate-400">
        <div className="container mx-auto px-6 py-8 text-center border-t border-slate-700 dark:border-slate-800">
            <p>&copy; {new Date().getFullYear()} Central Ground Water Board, Ministry of Jal Shakti. All rights reserved.</p>
            <p className="text-sm text-slate-500 mt-2">Developed in collaboration with IIT Hyderabad.</p>
        </div>
    </footer>
);


// --- Main App Component ---
export default function IngresAILandingPage() {
    const router = useRouter();

    const thcntxt = useContext(ThemeContext)
    if(!thcntxt)
        throw new Error("Theme context does not exists")
    const {theme,setTheme} = thcntxt
    function botpageclick(){
        router.push("/chat")
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // This effect is needed to add the global styles to the body
    useEffect(() => {
        document.body.className = 'bg-white dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 antialiased';
        
        const style = document.createElement('style');
        style.innerHTML = `
            .hero-gradient {
                background: radial-gradient(circle at 50% 30%, #e0f2fe, transparent 70%), linear-gradient(180deg, #f0f9ff 0%, #fff 100%);
            }
            .dark .hero-gradient {
                background: radial-gradient(circle at 50% 30%, #0c4a6e, transparent 70%), linear-gradient(180deg, #07131d 0%, #0f172a 100%);
            }
            .feature-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .feature-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05);
            }
            .dark .feature-card:hover {
                 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            }
            [data-motion] {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            [data-motion].visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);

        return () => { document.head.removeChild(style); }
    }, []);

    return (
        <>
            <SmallChat></SmallChat>
            <Header theme={theme} toggleTheme={toggleTheme} botpageclick={botpageclick} />
            <main>
                    { theme==="light" && <div className='fixed inset-0'>
                        <Aurora
                        // colorStops={["#fafdff","#fafdff","#fafdff"]}
                        amplitude={0.7} speed={0.4}></Aurora> 
                    </div>}
                <HeroSection botpageclick={botpageclick}/>
                <FeaturesSection />
                <ImpactSection />
                <AboutSection />
            </main>
            <Footer />
            <GoogleTranslate></GoogleTranslate>
        </>
    );
}

