import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Aditya Raghavendra Auradker. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/araditya" target="_blank" rel="noreferrer"
            className="hover:text-white transition-colors"><GithubIcon size={18} /></a>
          <a href="https://www.linkedin.com/in/aditya-raghavendra-auradker-662652133/" target="_blank" rel="noreferrer"
            className="hover:text-white transition-colors"><LinkedinIcon size={18} /></a>
          <a href="mailto:araditya21@gmail.com"
            className="hover:text-white transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
