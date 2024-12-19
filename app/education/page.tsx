import Image from 'next/image'

export default function EducationPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
        <div className="prose dark:prose-invert max-w-none">
          <h2>My Educational Journey</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Image 
            src="/placeholder.svg?height=400&width=600&text=Education+Image+1" 
            alt="Education Image 1" 
            width={600} 
            height={400} 
            className="my-8"
          />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Image 
            src="/placeholder.svg?height=400&width=600&text=Education+Image+2" 
            alt="Education Image 2" 
            width={600} 
            height={400} 
            className="my-8"
          />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  )
}
