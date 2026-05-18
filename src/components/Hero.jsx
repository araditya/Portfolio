import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 pt-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Open to new opportunities
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
          Hi, I'm <span className="text-blue-600">Aditya Auradker</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
          Senior TPM &amp; AI Product Leader
        </p>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          10+ years driving AI-powered solutions at Microsoft — from production LLM agents and
          RAG pipelines to supply chain intelligence platforms that saved 25,000+ hours annually
          and delivered $1.3M+ in business impact.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md shadow-blue-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-3 rounded-lg border border-slate-200 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-5 mb-16">
          <a href="https://github.com/araditya" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-blue-600 transition-colors">
            <GithubIcon size={22} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-raghavendra-auradker-662652133/" target="_blank" rel="noreferrer"
            className="text-slate-500 hover:text-blue-600 transition-colors">
            <LinkedinIcon size={22} />
          </a>
          <a href="mailto:araditya21@gmail.com"
            className="text-slate-500 hover:text-blue-600 transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="animate-bounce text-slate-400 hover:text-blue-500 transition-colors"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
