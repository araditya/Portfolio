import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Redmond, WA' },
  { icon: GraduationCap, label: 'Education', value: 'UT Austin · U of Michigan' },
  { icon: Briefcase, label: 'Current Role', value: 'Sr TPM @ Microsoft' },
  { icon: User, label: 'Email', value: 'araditya21@gmail.com' },
]

const awards = [
  { title: '3× Stellar Quest Award (VP)', detail: 'AI Agent Dev & New Frontier Visionary · FY\'26' },
  { title: 'The Inventor Award (GM)', detail: 'AI BOM Advisor – Smart Supply Chain · FY\'25' },
  { title: 'Microsoft Impact Award (President\'s)', detail: 'First Server with Recycled Materials · FY\'23' },
  { title: '2× Stellar Quest Award (VP)', detail: 'End-to-End Automated PLM Solution · FY\'25–26' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">About Me</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              I'm an AI-focused Product &amp; Program Leader with 10+ years of experience across
              cloud infrastructure, PLM, and supply chain analytics — including 5 years at
              Microsoft. I specialise in turning ambiguous engineering challenges into shipped,
              measurable AI products.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              At Microsoft I've built production AI agents using LLMs and RAG architecture,
              launched a supply chain intelligence platform presented to executive leadership,
              and co-led an AI-powered search feature that improved productivity by 78% per user.
              My work has generated over $1.3M in business impact and saved 25,000+ hours annually.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Outside of Microsoft I'm building <strong>ArrangeAI</strong> — a mobile app for
              media intelligence, photo clustering, and smart organisation — and I hold a
              PG certificate in AI &amp; ML from UT Austin's McCombs School of Business.
            </p>

            {/* Awards */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Recognition & Awards</h3>
              <div className="space-y-2">
                {awards.map(({ title, detail }) => (
                  <div key={title} className="flex gap-3 items-start">
                    <span className="text-yellow-500 mt-0.5">★</span>
                    <div>
                      <span className="text-slate-800 font-semibold text-sm">{title}</span>
                      <span className="text-slate-400 text-sm"> — {detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{label}</p>
                <p className="text-slate-800 font-semibold text-sm">{value}</p>
              </div>
            ))}

            {/* Stats */}
            <div className="col-span-2 grid grid-cols-3 gap-3 mt-2">
              {[['10+', 'Years Experience'], ['$1.3M+', 'Business Impact'], ['25K+', 'Hours Saved/yr']].map(([num, label]) => (
                <div key={label} className="bg-blue-600 rounded-xl p-4 text-center text-white">
                  <p className="text-2xl font-bold">{num}</p>
                  <p className="text-xs text-blue-100 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
