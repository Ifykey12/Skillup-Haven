import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, CheckCircle, PlayCircle, BookOpen, 
  DollarSign, Globe, Zap, Palette, ArrowRight,
  TrendingUp, Users, MessageSquare, Award,
  ExternalLink, Code2, ShieldCheck, ChevronRight
} from 'lucide-react';
import { courseData } from './constants';
import { Module, Lesson } from './types';

// --- Sub-components ---

const LogoSymbol = ({ className = "" }: { className?: string }) => (
  <div className={`w-8 h-8 bg-purple-600 rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-purple-200/50 ${className}`}>
    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
      <Zap size={14} className="text-purple-600 fill-current" />
    </div>
  </div>
);

const PricingCalculator = () => {
  const [pages, setPages] = useState(1);
  const basePrice = 250;
  const totalPrice = basePrice + (pages - 1) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <DollarSign className="text-purple-600" />
        Freelance Pricing Tool
      </h3>
      <p className="text-sm text-slate-500 mb-4">Estimate what you should charge your clients based on page count.</p>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Number of Pages: {pages}</label>
        <input 
          type="range" 
          min="1" 
          max="20" 
          value={pages} 
          onChange={(e) => setPages(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>
      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
        <div className="text-sm text-purple-600 font-medium uppercase tracking-wider mb-1">Recommended Quote</div>
        <div className="text-3xl font-bold font-display text-purple-950">${totalPrice.toLocaleString()}</div>
      </div>
    </div>
  );
};

const TemplateCopy = ({ text, title }: { text: string; title: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-hidden relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</span>
        <button 
          onClick={handleCopy}
          className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy Template'}
        </button>
      </div>
      <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans italic">"{text}"</pre>
    </div>
  );
};

// --- Main Pages ---

const LandingPage = () => {
  const whatsappUrl = "https://wa.link/3w6eyw";
  
  const handleAccess = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-linear-to-br from-purple-200 via-purple-50 to-indigo-200 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all bg-white/60 backdrop-blur-xl border-b border-purple-100">
        <div className="flex items-center gap-3">
          <LogoSymbol />
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">Skillup<span className="text-purple-600">Haven</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
          <div className="flex items-center gap-2 bg-purple-100/50 px-4 py-1.5 rounded-full border border-purple-200 text-purple-700">
            <MessageSquare size={14} />
            <span>Chat: 08103527474</span>
          </div>
          <a href="#curriculum" className="hover:text-purple-600">Curriculum</a>
        </div>

        <button 
          onClick={handleAccess}
          className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 flex items-center gap-2"
        >
          Access Course <ExternalLink size={14} />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-24 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-block px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-black mb-8 tracking-widest uppercase border border-purple-200">
            Learn • Build • Monetize
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Websites Made <br /><span className="gradient-text">Beautifully Easy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
            Join Skillup Haven and master AI-powered web design. We teach you how to build, host, and get clients—no coding needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={handleAccess}
              className="bg-slate-900 text-white px-10 py-5 rounded-3xl text-xl font-black hover:bg-purple-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-4 group"
            >
              Get Started on WhatsApp <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
            <div className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 shadow-sm" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-slate-900 leading-none">2,400+ Students</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Learning Daily</div>
              </div>
            </div>
          </div>
          
          <p className="mt-12 text-slate-400 font-bold text-sm uppercase tracking-widest">Questions? Call or Chat: 08103527474</p>
        </motion.div>
      </header>

      {/* Tools Section */}
      <section className="bg-white py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Learn These Modern Power-Tools</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Lovable', 'Bolt.new', 'Framer', 'Canva', 'Hostinger', 'Vercel', 'Netlify'].map(tool => (
              <span key={tool} className="text-2xl font-display font-bold text-slate-800 tracking-tighter">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Any Website Type</h3>
          <p className="text-slate-600">Master building everything from Business Sites to high-ticket <strong>HYIP & Investment Platforms</strong>. No limits with AI.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
            <Award size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">High-Ticket Income</h3>
          <p className="text-slate-600">Investment and HYIP sites are worth $2,000+. We show you how to close these specific high-value deals.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
            <Globe size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Secure Deployment</h3>
          <p className="text-slate-600">Learn to host finance and business sites securely on Vercel and Netlify with custom domains.</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Your 4-Week Freedom Roadmap</h2>
          <div className="space-y-8">
            {courseData.roadmap.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center font-bold text-xl font-display group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="pb-8 border-l border-slate-700 pl-8 -ml-12 md:ml-0 md:border-none md:pl-0">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">{step.week}: {step.focus}</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {step.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-center gap-3 text-slate-400">
                        <CheckCircle size={16} className="text-emerald-500" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <LogoSymbol />
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900">Skillup<span className="text-purple-600">Haven</span></span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs">Empowering beginners to build professional websites and profitable businesses with AI.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Direct Contact</div>
            <div className="text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <MessageSquare size={18} className="text-purple-600" /> 08103527474
            </div>
            <a href="https://wa.link/3w6eyw" className="text-purple-600 font-bold hover:underline">Chat on WhatsApp</a>
          </div>
          <div className="space-y-4">
            <p className="text-slate-500 text-sm font-bold">© 2026 Skillup Haven Academy. All rights reserved.</p>
            <div className="flex justify-center md:justify-end gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-purple-600">Privacy</a>
              <a href="#" className="hover:text-purple-600">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CourseDashboard = () => {
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [view, setView] = useState<'curriculum' | 'resources' | 'homework'>('curriculum');

  const getModuleIcon = (iconName: string) => {
    switch(iconName) {
      case 'graduation-cap': return <BookOpen size={20} />;
      case 'zap': return <Zap size={20} />;
      case 'palette': return <Palette size={20} />;
      case 'globe': return <Globe size={20} />;
      case 'dollar-sign': return <DollarSign size={20} />;
      case 'trending-up': return <TrendingUp size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-80 border-r border-slate-100 flex flex-col h-full bg-slate-50">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <LogoSymbol className="w-7 h-7" />
          <span className="font-display font-bold tracking-tight text-slate-900">Skillup<span className="text-purple-600">Haven</span></span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Main Menu</h3>
            <div className="space-y-1">
              <button 
                onClick={() => setView('curriculum')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-medium transition-all ${view === 'curriculum' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-slate-200'}`}
              >
                <BookOpen size={18} /> Curriculum
              </button>
              <button 
                onClick={() => setView('resources')}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-medium transition-all ${view === 'resources' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-slate-200'}`}
              >
                <TrendingUp size={18} /> Toolbox & Templates
              </button>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Course Modules</h3>
            <div className="space-y-1">
              {courseData.modules.map((mod) => (
                <button 
                  key={mod.id}
                  onClick={() => {
                    setActiveModule(mod);
                    setView('curriculum');
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between group transition-all ${activeModule?.id === mod.id ? 'bg-white shadow-sm border border-slate-200 text-purple-600' : 'text-slate-600 hover:bg-slate-200'}`}
                >
                  <div className="flex items-center gap-3">
                    {getModuleIcon(mod.icon)}
                    <span className="truncate w-40">{mod.title}</span>
                  </div>
                  <ChevronRight size={14} className={`transition-transform ${activeModule?.id === mod.id ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold">JD</div>
            <div>
              <div className="text-xs font-bold text-slate-900">Student Account</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">12% Completed</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {view === 'curriculum' ? (
            <motion.div 
              key="curriculum"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 md:p-12 max-w-4xl mx-auto"
            >
              {activeLesson ? (
                <div className="space-y-8">
                  <button onClick={() => setActiveLesson(null)} className="text-purple-600 font-bold text-sm flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                    ← Back to Module Overview
                  </button>
                  <header>
                    <div className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">{activeModule?.title}</div>
                    <h2 className="text-4xl font-display font-bold leading-tight">{activeLesson.title}</h2>
                    <div className="mt-4 flex items-center gap-4 text-slate-400 text-sm">
                      <span className="flex items-center gap-1"><PlayCircle size={14} /> Lesson duration: {activeLesson.duration}</span>
                      <span className="flex items-center gap-1 text-emerald-500 font-medium"><CheckCircle size={14} /> Mark as complete</span>
                    </div>
                  </header>

                  <div className="aspect-video bg-slate-900 rounded-3xl flex items-center justify-center relative group overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                      <PlayCircle size={64} className="text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                      <span className="px-3 py-1 bg-black/50 text-white text-[10px] rounded-full backdrop-blur-md">Vimeo Player (Preview)</span>
                    </div>
                  </div>

                  <div className="prose prose-slate prose-lg max-w-none">
                    <h3 className="text-xl font-bold flex items-center gap-2"><BookOpen size={20} className="text-purple-600" /> Lesson Summary</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{activeLesson.content}</p>
                    
                    {activeLesson.practicalExercise && (
                      <div className="my-8 p-6 bg-purple-50 rounded-2xl border border-purple-100">
                        <h4 className="text-purple-900 font-bold mb-3 flex items-center gap-2"><Code2 size={18} /> Practical Exercise</h4>
                        <p className="text-purple-700 font-medium">{activeLesson.practicalExercise}</p>
                      </div>
                    )}

                    {activeLesson.homework && (
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2"><MessageSquare size={18} /> Homework Assignment</h4>
                        <p className="text-slate-600">{activeLesson.homework}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                    <button className="text-slate-400 font-bold hover:text-slate-600 flex items-center gap-2">Previous Lesson</button>
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all flex items-center gap-2">
                      Next Lesson <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : activeModule ? (
                <div className="space-y-12">
                  <header className="pb-8 border-b border-slate-100">
                    <h2 className="text-4xl font-display font-bold mb-4">{activeModule.title}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeModule.objectives.map((obj, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                          <CheckCircle size={14} className="text-emerald-500" /> {obj}
                        </div>
                      ))}
                    </div>
                  </header>

                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Module Lessons</h3>
                    {activeModule.lessons.map((lesson, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveLesson(lesson)}
                        className="w-full group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-purple-200 transition-all text-left"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{lesson.title}</h4>
                            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">{lesson.duration}</p>
                          </div>
                        </div>
                        <PlayCircle className="text-slate-200 group-hover:text-purple-600 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mx-auto">
                    <BookOpen size={40} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold">Select a Module</h2>
                    <p className="text-slate-500">Pick a module from the sidebar to start learning.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-8">
                    {courseData.modules.slice(0, 4).map(m => (
                      <button 
                        key={m.id}
                        onClick={() => setActiveModule(m)}
                        className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-purple-600 transition-all text-center group"
                      >
                        <div className="mb-2 text-purple-600 flex justify-center">{getModuleIcon(m.icon)}</div>
                        <div className="text-xs font-bold text-slate-700 truncate">{m.title}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 md:p-12 max-w-5xl mx-auto space-y-16"
            >
              <header>
                <h2 className="text-4xl font-display font-bold mb-4">Student Toolbox</h2>
                <p className="text-slate-500 text-lg">Everything you need to launch and scale your business.</p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MessageSquare className="text-purple-600" /> Outreach Templates
                  </h3>
                  {courseData.outreachTemplates.map((template, idx) => (
                    <TemplateCopy 
                      key={idx} 
                      title={template.platform} 
                      text={template.text} 
                    />
                  ))}
                </section>

                <PricingCalculator />
              </div>

              <section className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Zap className="text-amber-600" /> AI Design Prompt Library
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { tool: 'Lovable/Bolt', tag: 'Business Profile', prompt: 'Build a modern cleaning service website with a primary blue color scheme. Include a hero section, services grid, client testimonials, and a contact form with email validation.' },
                    { tool: 'ChatGPT', tag: 'Branding', prompt: 'I am building a web design agency for local coffee shops. Suggest 10 premium-sounding names and a core value proposition that focuses on ROI.' },
                    { tool: 'Lovable', tag: 'Portfolio', prompt: 'Create a dark mode portfolio for a photographer using a bento-grid layout for the gallery and smooth reveal animations for text.' }
                  ].map((p, idx) => (
                    <div key={idx} className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{p.tool}</span>
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-lg text-[10px] font-bold">{p.tag}</span>
                        </div>
                        <p className="text-sm italic leading-relaxed text-slate-300">"{p.prompt}"</p>
                      </div>
                      <button 
                        onClick={() => navigator.clipboard.writeText(p.prompt)}
                        className="mt-6 w-full py-2 bg-slate-800 rounded-xl text-xs font-bold hover:bg-slate-700 transition-colors"
                      >
                        Copy Prompt
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-emerald-50 rounded-[40px] p-10 border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-200/50 shrink-0">
                  <ShieldCheck size={48} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Final Certification</h3>
                  <p className="text-emerald-700 leading-relaxed mb-6">Complete all modules and submit your portfolio project to receive your official <strong>AI Web Design Specialist</strong> certificate of completion.</p>
                  <button className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                    Submit Final Project
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default function App() {
  const [isInsideCourse, setIsInsideCourse] = useState(false);

  return (
    <div className="font-sans antialiased text-slate-900">
      <AnimatePresence mode="wait">
        {!isInsideCourse ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingPage />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CourseDashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
