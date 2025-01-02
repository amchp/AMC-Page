import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { ReactNode } from 'react';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-white">
            Alejandro Mc Ewen
          </h1>
          <p className="text-xl text-gray-300">
            Software Engineer | Problem Solver | Continuous Learner
          </p>
          <p className="text-lg text-gray-400">
            Welcome to my corner of the web!
            I’m Alejandro Mc Ewen, a Computer Science student at EAFIT University. 
            This is my personal page. I share my passion for programming and interesting projects.
            I strive to create efficient, scalable solutions and constantly push the boundaries of what’s possible in software development.
            I also solve algorithmic puzzles on Codeforces. I’m doing my best to finish everything I start, and I hope you enjoy exploring my work here.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="mcewenalejandro@gmail.com" icon={<Mail size={24} />} label="Mail" />
            <SocialLink href="https://www.linkedin.com/in/alejandro-mc-ewen-21b825227/" icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href="https://github.com/amchp" icon={<Github size={24} />} label="GitHub" />
            <SocialLink 
              href="https://codeforces.com/profile/automac"
              icon={<Image src="/code-forces.svg" alt="Codeforces" width={24} height={24} />} 
              label="Codeforces" 
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
      aria-label={label}
      data-tooltip-id={label} data-tooltip-content={label}
    >
      {icon}
    </Link>
  )
}

