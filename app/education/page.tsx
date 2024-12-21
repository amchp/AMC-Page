import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Education</h1>
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-white">EAFIT University</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">B. Sc: Computer Science & Engineering & Applied Mathematics</h3>
              <p className="text-gray-400">Jun. 2020 - Nov. 2025 (Expected)</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">GPA:</span>
              <Badge variant="secondary" className="text-lg">4.7/5.0</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">Relevant Coursework</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Data Bases",
              "Machine Learning",
              "Software Engineering",
              "Formal Languages & Compilers",
              "Linear Algebra",
              "High-Performance Computing",
              "Operating Systems",
              "Information Systems",
              "User Experience",
              "ICanStudy",
              "Telematics"
            ].map((course, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <Badge variant="outline" className="mr-2 w-2 h-2 p-0 rounded-full bg-blue-400 border-none" />
                {course}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-white mb-4">My Educational Journey</h2>
        <p className="text-gray-300">
          My time at EAFIT University has been transformative, allowing me to delve deep into the realms of Computer Science, Engineering, and Applied Mathematics. This unique combination of disciplines has equipped me with a versatile skill set, enabling me to approach complex problems from multiple angles.
        </p>
        <p className="text-gray-300">
          The rigorous coursework, ranging from theoretical concepts in Formal Languages & Compilers to practical applications in Software Engineering and Machine Learning, has provided me with a solid foundation in both the theoretical and practical aspects of computer science.
        </p>
        <p className="text-gray-300">
          I'm particularly excited about the intersection of High-Performance Computing and Machine Learning, areas where I see immense potential for innovation. My education has not only given me technical skills but also fostered critical thinking and problem-solving abilities that I believe are crucial in the ever-evolving field of technology.
        </p>
      </div>
    </div>
  )
}
