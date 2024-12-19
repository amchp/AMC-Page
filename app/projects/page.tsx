import { Link2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { projects } from './data'


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-scale-down"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
                  <p className="text-gray-400 line-clamp-2">{project.description}</p>
                  <Link href={project.link}>
                    <Link2 size={24} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


