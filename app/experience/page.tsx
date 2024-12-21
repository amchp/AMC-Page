'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase, Code, ExternalLink } from 'lucide-react'

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  type: 'personal' | 'work';
  description: string;
  skills: string[];
  image: string;
  link?: string;
}

const experiences: Experience[] = [
  { 
    id: 'exp1', 
    title: 'Fitness Tracker App', 
    company: 'Personal Project',
    date: 'Jan 2023 - Present', 
    type: 'personal',
    description: 'Developed a mobile app for tracking personal fitness goals and nutrition using React Native and Firebase.',
    skills: ['React Native', 'Firebase', 'Redux', 'UI/UX Design'],
    image: '/placeholder.svg?height=400&width=600&text=Fitness+Tracker+App',
    link: 'https://github.com/johndoe/fitness-tracker'
  },
  { 
    id: 'exp2', 
    title: 'Full Stack Developer', 
    company: 'TechStart Inc.',
    date: 'Jun 2022 - Present', 
    type: 'work',
    description: 'Developing and maintaining scalable web applications for fintech clients using React, Node.js, and AWS.',
    skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'GraphQL'],
    image: '/placeholder.svg?height=400&width=600&text=TechStart+Inc.'
  },
  { 
    id: 'exp3', 
    title: 'State Management Library', 
    company: 'Open Source Contribution',
    date: 'Mar 2022 - May 2022', 
    type: 'personal',
    description: 'Created an open-source library for simplifying state management in React applications, gaining over 500 GitHub stars.',
    skills: ['React', 'TypeScript', 'State Management', 'Open Source'],
    image: '/placeholder.svg?height=400&width=600&text=State+Management+Library',
    link: 'https://github.com/johndoe/react-easy-state'
  },
  { 
    id: 'exp4', 
    title: 'Software Engineer', 
    company: 'SearchTech',
    date: 'Sep 2021 - May 2022', 
    type: 'work',
    description: 'Worked on improving search algorithms and user experience for a large-scale search engine.',
    skills: ['Python', 'Machine Learning', 'Elasticsearch', 'A/B Testing'],
    image: '/placeholder.svg?height=400&width=600&text=SearchTech'
  },
]

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
                className="w-full h-48 object-cover rounded-t-xl"
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


