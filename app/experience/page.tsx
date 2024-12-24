'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase, Code } from 'lucide-react'

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  type: 'personal' | 'work';
  description: string;
  skills: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Developer",
    company: "MachEight",
    date: "February 2022 - Present",
    type: "work",
    description: "Developed a CRM for a company with 2 million dollar revenue, implemented with Angular front-end and Django back-end integrated with a Postgres database. Designed and deployed a single sign-on with Okta, increasing user adoption.",
    skills: ["Angular", "Django", "PostgreSQL", "Okta", "CRM Development"],
    image: "/work/macheight-logo.png"
  },
  {
    id: "2",
    title: "Database Developer",
    company: "Unidad de Citologia y Patologia",
    date: "June 2019 - Present",
    type: "work",
    description: "Automated Excel sheet exports, saving staff an hour of daily work. Developed a product order management program and a statistics gathering tool, improving business decision-making.",
    skills: ["Python", "Automation", "Database Management", "Excel", "Business Intelligence"],
    image: "/work/ucyp-logo.png"
  },
  {
    id: "3",
    title: "University Tutor",
    company: "EAFIT University",
    date: "July 2021 – Nov 2021",
    type: "work",
    description: "Guided students through challenging concepts in subjects including Calculus I, II & III, Physics I, Logic, Discrete Math, and Programming Fundamentals.",
    skills: ["Teaching", "Mathematics", "Physics", "Discrete Math", "Programming"],
    image: "/work/eafit.jpg"
  },
  {
    id: "4",
    title: "Competitive Programming Achievements",
    company: "Various",
    date: "2019 - Present",
    type: "personal",
    description: "Demonstrated excellence in competitive programming by achieving significant milestones. Placed second in the 2023 ICPC South America-North Finals and ranked 29th in Latin America, qualifying for the Super Region Finals from a competitive field of 6,780 students representing 495 universities across 17 countries. Additionally, secured a Top 2 position in MaratonTech 2023, a city-wide competition with over 170 participants, organized by Ruta N and ITM in Medellín, Colombia. Regularly participates in prestigious contests and maintains competitive programming practice on platforms like Codeforces and LeetCode, where I am recognized as one of the top problem solvers.",
    skills: ["Competitive Programming", "Problem Solving", "ICPC", "Algorithms", "Teamwork"],
    image: "/personal/competive-programing.JPG"
  },  {
    id: "5",
    title: "Participated in TOM Colombia 2019",
    company: "TOM Colombia",
    date: "August 2019 - October 2019",
    type: "personal",
    description: "Designed an ATM simulator to assist individuals with learning disabilities in using ATMs. Developed the application 'Simulador Cajero Electrónico (TOM),' which has been downloaded 500 times on the Play Store.",
    skills: ["App Development", "Inclusive Design", "Android", "UI/UX"],
    image: "/personal/tom.JPG"
  },
  {
    id: "6",
    title: "Using Neovim and Tmux",
    company: "Personal Project",
    date: "2021 - Present",
    type: "personal",
    description: "Enhanced coding productivity through a custom Neovim and Tmux setup for efficient workflow management. Configuration and setup details are available in my dotfiles repository.",
    skills: ["Neovim", "Tmux", "Productivity", "Custom Configuration"],
    image: "/personal/nvim.svg"
  }
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'work'>('work')

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Experience</h1>
      <Tabs defaultValue="work" className="w-full mb-8" onValueChange={(value) => setActiveTab(value as 'personal' | 'work')}>
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExperiences.map((exp, index) => (
            <Card className="bg-gray-800 border-gray-700 overflow-hidden rounded-xl">
              <Image 
                src={exp.image} 
                alt={exp.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-contain rounded-t-xl"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-gray-400">{exp.company}</CardDescription>
                  </div>
                  {exp.type === 'personal' ? <Code className="text-blue-400" /> : <Briefcase className="text-green-400" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  {exp.date}
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="rounded-full">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  )
}


