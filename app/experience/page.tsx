'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

interface Experience {
  id: string;
  title: string;
  date: string;
  type: 'personal' | 'work';
  description: string;
  image: string;
}

const experiences: Experience[] = [
  { 
    id: 'exp1', 
    title: 'Personal Project 1', 
    date: '2023', 
    type: 'personal',
    description: 'Developed a mobile app for tracking personal fitness goals and nutrition.',
    image: '/placeholder.svg?height=200&width=400&text=Project+1'
  },
  { 
    id: 'exp2', 
    title: 'Work Experience 1', 
    date: '2022-2023', 
    type: 'work',
    description: 'Full-stack developer at a fintech startup, focusing on building secure and scalable web applications.',
    image: '/placeholder.svg?height=200&width=400&text=Work+1'
  },
  { 
    id: 'exp3', 
    title: 'Personal Project 2', 
    date: '2022', 
    type: 'personal',
    description: 'Created an open-source library for simplifying state management in React applications.',
    image: '/placeholder.svg?height=200&width=400&text=Project+2'
  },
  { 
    id: 'exp4', 
    title: 'Work Experience 2', 
    date: '2021-2022', 
    type: 'work',
    description: 'Software engineer at a large tech company, working on improving search algorithms and user experience.',
    image: '/placeholder.svg?height=200&width=400&text=Work+2'
  },
]

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'work'>('personal')

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Experience</h1>
      <Tabs defaultValue="personal" className="w-full" onValueChange={(value) => setActiveTab(value as 'personal' | 'work')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="work">Work</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <ExperienceTable experiences={filteredExperiences} />
        </TabsContent>
        <TabsContent value="work">
          <ExperienceTable experiences={filteredExperiences} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ExperienceTable({ experiences }: { experiences: Experience[] }) {
  const router = useRouter()

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 text-gray-300">Image</TableHead>
              <TableHead className="text-gray-300">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experiences.map((exp) => (
              <TableRow 
                key={exp.id} 
                className="cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                onClick={() => router.push(`/experience/${exp.id}`)}
              >
                <TableCell className="w-1/2 p-0">
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    <p className="text-sm text-gray-300">{exp.description}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


