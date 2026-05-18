import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailto = `mailto:araditya21@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Get In Touch</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <a href="mailto:araditya21@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <p className="text-slate-700 font-medium text-sm">araditya21@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/araditya" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <GithubIcon size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">GitHub</p>
                  <p className="text-slate-700 font-medium text-sm">github.com/araditya</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/aditya-raghavendra-auradker-662652133/" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <LinkedinIcon size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                  <p className="text-slate-700 font-medium text-sm">Aditya Raghavendra Auradker</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-800 placeholder-slate-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-800 placeholder-slate-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or just say hello..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-800 placeholder-slate-400 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-200"
            >
              {sent ? 'Opening your email client...' : <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
