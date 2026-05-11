import { CourseData } from './types';

export const courseData: CourseData = {
  title: "Master AI Web Design with Skillup Haven",
  subtitle: "Build professional websites easily without coding, host them online, and start earning from day one.",
  modules: [
    {
      id: "intro",
      title: "Course Introduction",
      icon: "graduation-cap",
      objectives: [
        "Meet your mentor and understand the no-code revolution",
        "Master the roadmap to $2k+/month as a beginner",
        "Setting up your digital workstation"
      ],
      lessons: [
        {
          id: "m0-l1",
          title: "Welcome: Your New Life Starts Here",
          duration: "10 mins",
          content: "In this lesson, we break down the huge opportunity in the AI web design market. Every business needs a website, but they don't have $5,000 for a coder. You are the solution.",
          practicalExercise: "Join the private community and introduce yourself.",
          homework: "List 5 local businesses in your city that have terrible websites or none at all."
        },
        {
          id: "m0-l2",
          title: "The Beginner's Secret: Why No-Code Wins",
          duration: "15 mins",
          content: "Why coding is becoming a 'bonus skill' while 'AI orchestration' is the 'money skill'. We explain tools like Framer and Lovable.",
          practicalExercise: "Create accounts on Framer and Vercel."
        }
      ]
    },
    {
      id: "ai-creation",
      title: "Module 1: AI Website Creation",
      icon: "zap",
      objectives: [
        "Mastering Bolt.new and Lovable",
        "Using prompts to build entire landing pages",
        "Customizing AI-generated code visually"
      ],
      lessons: [
        {
          id: "m1-l1",
          title: "Generating Sites with Lovable & Bolt.new",
          duration: "25 mins",
          content: "Step-by-step tutorial on prompting the AI to build a functional business site. 'Build me a plumber website with a booking form and modern aesthetic.'",
          practicalExercise: "Build a single-page plumber or dental website using Bolt.new.",
          homework: "Screenshot your first AI-built landing page and post it in the group."
        }
      ]
    },
    {
      id: "no-code-design",
      title: "Module 2: No-Code Design Mastery",
      icon: "palette",
      objectives: [
        "Perfecting layouts in Framer",
        "Using Canva for stunning web assets",
        "Typography and Color theory for beginners"
      ],
      lessons: [
        {
          id: "m2-l1",
          title: "Framer Mastery: Making AI Design Look Premium",
          duration: "30 mins",
          content: "AI builds the draft, Framer adds the soul. Learn how to drag and drop your way to a $1,000 design.",
          practicalExercise: "Import your AI design ideas into Framer.",
          homework: "Design a hero section using a custom font and high-quality image from Canva."
        }
      ]
    },
    {
      id: "hosting-deployment",
      title: "Module 3: Hosting & Domains",
      icon: "globe",
      objectives: [
        "Publishing to Netlify and Vercel",
        "Buying domains on Namecheap",
        "Connecting custom domains to Hostinger"
      ],
      lessons: [
        {
          id: "m3-l1",
          title: "Going Live: Deployment 101",
          duration: "20 mins",
          content: "How to take your code from the AI tool and host it for free on Netlify/Vercel forever.",
          practicalExercise: "Deploy your first site to a .netlify.app URL.",
          homework: "Help one friend or family member host a simple 'link-in-bio' style site."
        }
      ]
    },
    {
      id: "getting-clients",
      title: "Module 4: The Money Module (Finding Clients)",
      icon: "dollar-sign",
      objectives: [
        "The WhatsApp Status Strategy",
        "Instagram Outreach that works",
        "Cold Email for High-Ticket deals",
        "Pricing your services correctly"
      ],
      lessons: [
        {
          id: "m4-l1",
          title: "Closing Deals on WhatsApp & Instagram",
          duration: "40 mins",
          content: "The exact script to use when talking to business owners. How to transition from 'learner' to 'professional'.",
          practicalExercise: "Send 10 DM's using the 'Small Error' script provided.",
          homework: "Schedule your first discovery call with a potential client."
        }
      ]
    },
    {
      id: "advanced-niches",
      title: "Module 5: Investment & HYIP Website Mastery",
      icon: "trending-up",
      objectives: [
        "How to build high-converting Investment and HYIP landing pages",
        "Setting up dashboards for user tracking",
        "Security best practices for finance-related sites"
      ],
      lessons: [
        {
          id: "m5-l1",
          title: "Building Investment & HYIP Portals",
          duration: "45 mins",
          content: "Learn how to use AI to generate complete investment platforms. We focus on 'Trust-driven design'—how to make a site look professional enough for users to invest. We cover layout, payment gate design, and ROI calculators.",
          practicalExercise: "Create a 3-page HYIP landing page with a 'Plan' section and user login area.",
          homework: "Draft a security checklist for your investment website project."
        }
      ]
    }
  ],
  pricingGuide: [
    { service: "Landing Page (Single Page)", lowRange: "$200", highRange: "$500" },
    { service: "Portfolio Website", lowRange: "$350", highRange: "$800" },
    { service: "Investment/HYIP Plateau", lowRange: "$1,500", highRange: "$3,500" },
    { service: "Small Business (5-10 Pages)", lowRange: "$1,000", highRange: "$2,500" },
    { service: "Monthly Maintenance", lowRange: "$50/mo", highRange: "$150/mo" }
  ],
  outreachTemplates: [
    {
      platform: "Instagram/Facebook DM",
      text: "Hey [Name], I was just checking out your Instagram and saw your website link doesn't really work well on mobile. I'm a web designer and I'd love to show you a quick 2-minute mockup I made of how your site could look. No pressure at all—just thought I'd help. Interested?"
    },
    {
      platform: "WhatsApp Status",
      text: "I'm looking for 3 business owners who need a professional website to boost their sales. Giving a 50% discount this week to build my portfolio. Reply 'SITE' if you're interested!"
    }
  ],
  roadmap: [
    { week: "Week 1", focus: "Tool Mastery", tasks: ["Master Bolt.new", "Learn Framer basics", "Create your first 3 landing pages"] },
    { week: "Week 2", focus: "Portfolio Building", tasks: ["Build a personal brand site", "Create 3 niche templates (Real Estate, Gym, Law)", "Host them on Netlify"] },
    { week: "Week 3", focus: "Outreach & Branding", tasks: ["Set up Professional Instagram", "Start cold outreach", "Network on LinkedIn"] },
    { week: "Week 4", focus: "Closing & Delivery", tasks: ["Run discovery calls", "Get your first deposit", "Deliver and ask for reviews"] }
  ]
};
