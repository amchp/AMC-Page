'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from '../data'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return <div className="flex items-center justify-center min-h-screen">Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-4 text-gray-300 hover:text-white"
        onClick={() => router.push('/projects')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">{project.title}</h1>
      <Card className="mb-8 bg-gray-800 border-gray-700">
        <CardContent className="p-0">
            <ImageOrComponent {content: project.content, carousel: false }/>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">{project.description}</p>
      </div>
        </CardContent>
      </Card>
    </div>
  )
}


