import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Bot, BookOpen, Code2, GraduationCap, Laptop, Menu, MessageCircle, Palette, Play, Sparkles, Users, Video, X, Zap } from 'lucide-react'
import { isSupabaseConfigured, supabase } from './lib/supabase'

type Course = { id:string; title:string; description:string; category:string; level:string; duration:string|null; price:number; image_url?:string|null }
const starterCourses:Course[]=[
 {id:'ai-automation',title:'AI Automation',description:'Build smart workflows that save time and help businesses work better.',category:'AI & Automation',level:'Beginner friendly',duration:'4 weeks',price:0},
 {id:'ai-web',title:'AI Website Building',description:'Turn your ideas into real websites and digital products using AI tools.',category:'Website Development',level:'Practical training',duration:'6 weeks',price:0},
 {id:'ai-creative',title:'AI Video & Ad Creatives',description:'Create engaging videos, adverts and visual content with modern AI tools.',category:'Creative Skills',level:'Practical training',duration:'4 weeks',price:0},
 {id:'social-media',title:'Social Media Management',description:'Plan content, grow audiences and build valuable digital marketing skills.',category:'Digital Marketing',level:'Beginner friendly',duration:'4 weeks',price:0},
]
const benefits=[
 {icon:Bot,title:'Learn practical AI skills',text:'Understand useful AI tools and apply them to real tasks and everyday challenges.'},
 {icon:Code2,title:'Build real digital projects',text:'Move beyond theory by creating websites, content and useful digital solutions.'},
 {icon:Zap,title:'Work smarter and faster',text:'Use technology to improve productivity, creativity and business processes.'},
 {icon:GraduationCap,title:'Grow new opportunities',text:'Develop skills you can use for work, business and personal growth.'},
]
export default function App(){
 const [courses,setCourses]=useState<Course[]>(starterCourses)
 const [authMode,setAuthMode]=useState<'login'|'signup'|null>(null)
 const [mobileOpen,setMobileOpen]=useState(false)
 const [userEmail,setUserEmail]=useState<string|null>(null)
 const [name,setName]=useState('');const [email,setEmail]=useState('');const [password,setPassword]=useState('')
 const [authMessage,setAuthMessage]=useState('');const [busy,setBusy]=useState(false)
 const [contact,setContact]=useState({full_name:'',email:'',phone:'',message:''})
 const [contactMessage,setContactMessage]=useState('');const [contactBusy,setContactBusy]=useState(false)
 useEffect(()=>{
  if(!supabase)return
  supabase.auth.getSession().then(({data})=>setUserEmail(data.session?.user.email??null))
  const {data:listener}=supabase.auth.onAuthStateChange((_event,session)=>setUserEmail(session?.user.email??null))
  supabase.from('courses').select('id,title,description,category,level,duration,price,image_url').eq('is_published',true).order('created_at',{ascending:false}).then(({data})=>{if(data?.length)setCourses(data as Course[])})
  return()=>listener.subscription.unsubscribe()
 },[])
 async function handleAuth(e:FormEvent){
  e.preventDefault();setBusy(true);setAuthMessage('')
  if(!supabase){setAuthMessage('Add your Supabase URL and publishable key to activate accounts.');setBusy(false);return}
  try{
   if(authMode==='signup'){
    const {error}=await supabase.auth.signUp({email,password,options:{data:{full_name:name},emailRedirectTo:window.location.origin}})
    if(error)throw error
    setAuthMessage('Your account has been created. Check your email if confirmation is enabled.')
   }else{
    const {error}=await supabase.auth.signInWithPassword({email,password})
    if(error)throw error
    setAuthMode(null)
   }
  }catch(err){setAuthMessage(err instanceof Error?err.message:'Unable to continue. Please try again.')}
  finally{setBusy(false)}
 }
 async function handleContact(e:FormEvent){
  e.preventDefault()
  if(!supabase){setContactMessage('The form will be available once Supabase is configured.');return}
  setContactBusy(true);setContactMessage('')
  const {error}=await supabase.from('enquiries').insert(contact)
  setContactBusy(false)
  if(error)setContactMessage(error.message)
  else{setContactMessage('Thank you! Your enquiry has been received.');setContact({full_name:'',email:'',phone:'',message:''})}
 }
 async function joinCourse(courseId:string){
  if(!supabase){setAuthMessage('Connect Supabase to request course enrolment.');setAuthMode('signup');return}
  const {data}=await supabase.auth.getUser()
  if(!data.user){setAuthMessage('Create an account or log in to join a course.');setAuthMode('signup');return}
  const {error}=await supabase.from('enrollments').insert({student_id:data.user.id,course_id:courseId})
  setAuthMessage(error?(error.code==='23505'?'You have already requested this course.':error.message):'Your course request has been submitted!')
  setAuthMode('login')
 }
 async function signOut(){await supabase?.auth.signOut();setUserEmail(null)}
 const go=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMobileOpen(false)}
 return <div className="site">
  <header className="nav">
   <a className="brand" href="#home"><span className="brand-icon">SH</span><span>SkillUp <b>Haven</b></span></a>
   <nav className={mobileOpen?'nav-menu show':'nav-menu'}><a href="#about" onClick={()=>setMobileOpen(false)}>About</a><a href="#programs" onClick={()=>setMobileOpen(false)}>Programs</a><a href="#resources" onClick={()=>setMobileOpen(false)}>Resources</a><a href="#contact" onClick={()=>setMobileOpen(false)}>Contact</a><div className="mobile-buttons"><button className="btn outline" onClick={()=>{setAuthMode('login');setMobileOpen(false)}}>Log in</button><button className="btn primary" onClick={()=>{setAuthMode('signup');setMobileOpen(false)}}>Get started</button></div></nav>
   <div className="nav-right">{userEmail?<><span className="user-email">{userEmail}</span><button className="btn outline" onClick={signOut}>Log out</button></>:<><button className="text-button" onClick={()=>setAuthMode('login')}>Log in</button><button className="btn primary" onClick={()=>setAuthMode('signup')}>Join SkillUp <ArrowUpRight size={16}/></button></>}</div>
   <button className="menu-btn" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen?<X/>:<Menu/>}</button>
  </header>
  <main>
   <section className="hero" id="home">
    <div className="hero-copy"><span className="eyebrow"><i/> YOUR FUTURE, BUILT WITH DIGITAL SKILLS</span><h1>Learn skills.<br/><em>Create possibilities.</em></h1><p>Your ideas deserve more than just ideas. Learn AI and digital skills, build real projects, and prepare yourself for the opportunities ahead.</p><div className="hero-actions"><button className="btn yellow" onClick={()=>go('programs')}>Explore our programs <ArrowRight size={17}/></button><button className="watch" onClick={()=>go('about')}><span><Play size={13} fill="currentColor"/></span> Discover SkillUp Haven</button></div><div className="hero-foot"><span className="tiny-orbs"><i>✦</i><i>AI</i><i>SH</i></span><span><b>Learn. Create. Grow.</b><small>Practical skills for a digital world.</small></span></div></div>
    <div className="hero-art"><div className="art-circle c1"/><div className="art-circle c2"/><div className="art-spark">✦</div><div className="art-person"><div className="hair"/><div className="head"><i/><i/><b/></div><div className="neck"/><div className="body"><span/></div><div className="phones"/></div><div className="art-laptop"><div className="screen"><small>SKILLUP LAB</small><b>CREATE<br/>SOMETHING<br/><em>AMAZING.</em></b><i/><i/><i/></div><div className="base"/></div><div className="float-label label-top"><Sparkles size={16}/> Ideas into reality</div><div className="float-label label-bottom"><Code2 size={17}/><span><b>Build your next big thing</b><small>One skill at a time</small></span></div><div className="sticker">MAKE IT<br/>HAPPEN ↗</div></div>
    <div className="hero-index">01 <i/> THE DIGITAL FUTURE STARTS HERE</div>
   </section>
   <section className="section benefits" id="about"><div className="section-title"><span className="eyebrow">WHY SKILLUP HAVEN</span><h2>More than learning.<br/><em>It's your next step forward.</em></h2><p>We make digital learning practical, creative and accessible, so you can turn knowledge into something meaningful.</p></div><div className="benefit-grid">{benefits.map((b,i)=><motion.article className="benefit-card" key={b.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span className={'benefit-icon b'+i}><b.icon size={23}/></span><small>0{i+1}</small><h3>{b.title}</h3><p>{b.text}</p><ArrowUpRight className="card-arrow" size={17}/></motion.article>)}</div></section>
   <section className="section programs" id="programs"><div className="section-title row-title"><div><span className="eyebrow">LEARN BY DOING</span><h2>Find your next <em>skill.</em></h2></div><p>Explore practical programs designed to help you create, build and grow in the digital world.</p></div><div className="course-grid">{courses.map((c,i)=><motion.article className={'course course'+(i%4)} key={c.id} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><div className="course-head"><span>{c.category}</span><b>{i===0?<Bot/>:i===1?<Laptop/>:i===2?<Video/>:<Users/>}</b></div><div className="course-content"><small>{c.level}{c.duration?' · '+c.duration:''}</small><h3>{c.title}</h3><p>{c.description}</p><div className="course-foot"><strong>{c.price>0?'₦'+c.price.toLocaleString():'Enquire for fees'}</strong><button onClick={()=>joinCourse(c.id)}>Learn more <ArrowUpRight size={16}/></button></div></div></motion.article>)}</div><p className="course-note">New classes and learning opportunities are added regularly.</p></section>
   <section className="section resources" id="resources"><div className="resource-panel"><div><span className="eyebrow">YOUR LEARNING TOOLKIT</span><h2>Keep learning.<br/><em>Keep becoming.</em></h2><p>Explore helpful ebooks, practical guides and learning resources created to support your digital journey.</p><button className="btn yellow" onClick={()=>setAuthMode('signup')}>Explore resources <ArrowRight size={17}/></button></div><div className="book-art"><div className="book-back">AI & IDEAS</div><div className="book-front"><BookOpen size={32}/><b>THE DIGITAL<br/>SKILLS PLAYBOOK</b><small>SKILLUP HAVEN</small></div><span>✳</span><label>LEARN AT<br/>YOUR PACE</label></div></div></section>
   <section className="section contact" id="contact"><div className="contact-panel"><div className="contact-copy"><span className="eyebrow">LET'S GET YOU STARTED</span><h2>Ready to take<br/>your next step?</h2><p>Have a question about our programs or need help choosing where to begin? Send us a message. We'd love to hear from you.</p><div className="contact-prompt"><MessageCircle/><span><b>Let's talk</b><small>Our team will get back to you as soon as possible.</small></span></div></div><form className="contact-form" onSubmit={handleContact}><label>Your name<input required value={contact.full_name} onChange={e=>setContact({...contact,full_name:e.target.value})} placeholder="Enter your name"/></label><label>Email address<input required type="email" value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} placeholder="you@example.com"/></label><label>Phone number <small>(optional)</small><input value={contact.phone} onChange={e=>setContact({...contact,phone:e.target.value})} placeholder="+234"/></label><label>How can we help?<textarea required rows={3} value={contact.message} onChange={e=>setContact({...contact,message:e.target.value})} placeholder="Tell us what you'd like to learn..."/></label><button className="btn yellow full" disabled={contactBusy}>{contactBusy?'Sending...':'Send enquiry'} <ArrowRight size={17}/></button>{contactMessage&&<p className="message">{contactMessage}</p>}</form></div></section>
  </main>
  <footer className="footer"><div className="footer-top"><div><a className="brand" href="#home"><span className="brand-icon">SH</span><span>SkillUp <b>Haven</b></span></a><p>Helping people turn curiosity into practical digital skills and meaningful opportunities.</p></div><div className="footer-links"><div><b>Explore</b><a href="#about">About us</a><a href="#programs">Our programs</a><a href="#resources">Resources</a></div><div><b>Connect</b><a href="#contact">Contact us</a><a href="https://instagram.com/">Instagram</a><a href="https://wa.me/">WhatsApp</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SkillUp Haven. All rights reserved.</span><b>Learn. Create. Grow. ↗</b></div></footer>
  <AnimatePresence>{authMode&&<motion.div className="modal-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget){setAuthMode(null);setAuthMessage('')}}}><motion.div className="auth-modal" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:15,opacity:0}}><button className="close-modal" onClick={()=>{setAuthMode(null);setAuthMessage('')}}><X/></button><span className="brand-icon">SH</span><span className="eyebrow">WELCOME TO SKILLUP HAVEN</span><h2>{authMode==='signup'?'Start your journey.':'Welcome back.'}</h2><p>{authMode==='signup'?'Create your student account and get ready to grow.':'Log in to continue your learning journey.'}</p><form onSubmit={handleAuth}>{authMode==='signup'&&<label>Full name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name"/></label>}<label>Email address<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" minLength={6} required value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters"/></label><button className="btn primary full" disabled={busy}>{busy?'Please wait...':authMode==='signup'?'Create account':'Log in'} <ArrowRight size={17}/></button></form>{authMessage&&<p className="message">{authMessage}</p>}<p className="switch-auth">{authMode==='signup'?'Already have an account?':'New to SkillUp Haven?'} <button onClick={()=>{setAuthMode(authMode==='signup'?'login':'signup');setAuthMessage('')}}>{authMode==='signup'?'Log in':'Create an account'}</button></p>{!isSupabaseConfigured&&<p className="setup-hint">Add the Supabase project URL and publishable key to your environment settings to activate accounts.</p>}</motion.div></motion.div>}</AnimatePresence>
 </div>
}
