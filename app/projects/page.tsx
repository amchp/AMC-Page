import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { projects } from './data'
import { ImageOrComponent } from '@/components/image-or-component'


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <div className='content-center'>
                    <ImageOrComponent {...{ content: project.content, carousel: false }}/>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
                  <p className="text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


