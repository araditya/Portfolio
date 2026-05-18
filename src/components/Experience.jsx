import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Technical Program Manager – Product Data Management',
    company: 'Microsoft',
    location: 'Redmond, WA',
    period: 'Nov 2021 – Present',
    type: 'Full-time',
    bullets: [
      'Built production AI agents using LLMs and RAG architecture for metadata extraction, CAD validation, and change management — saving 10,000+ hours annually and $500K in operational costs.',
      'Developed end-to-end AI-enabled automation platform with LEAN principles, generating $1.3M+ business impact by cutting cycle time by 6 weeks.',
      'Designed and launched AI-powered supply chain intelligence platform (DFx: EoL, Cost, Reliability) saving 15,000 hours annually — presented to Executive Leadership.',
      'Enabled critical infrastructure deployments (GB200, Liquid Cooling) in collaboration with planning, NPI, sourcing, and design teams, delivering ~$1B impact for Microsoft.',
      "Co-led AI-powered search in Microsoft's PLM system improving productivity by 78% per user/month and retrieval efficiency by 50%.",
    ],
  },
  {
    role: 'Supply Chain Data Analyst',
    company: 'Microsoft (Contract)',
    location: 'Redmond, WA',
    period: 'March 2021 – Nov 2021',
    type: 'Contract',
    bullets: [
      'Managed 10K+ hardware parts in PLM system supporting cloud infrastructure across multiple Azure regions.',
      'Built SQL-based analytics and KPI dashboards for process improvement, increasing team efficiency by 22.8%.',
    ],
  },
  {
    role: 'Business Analyst',
    company: 'Modak Analytics Software',
    location: 'Hyderabad, India',
    period: '2017 – 2019',
    type: 'Full-time',
    bullets: [
      'Built analytics solutions and data-driven recommendations for manufacturing process improvement.',
      'Delivered insights that achieved 12% cost reduction across key production workflows.',
    ],
  },
  {
    role: 'Co-Founder & Builder',
    company: 'AdiGarud Solutions',
    location: 'Redmond, WA',
    period: '2024 – Present',
    type: 'Startup',
    bullets: [
      'Founded AdiGarud Solutions — an AI startup applying generative AI and LLM-powered solutions to real-world problems.',
      'End-to-end ownership across product vision, architecture, engineering, and go-to-market strategy.',
      'Leveraging enterprise AI expertise from Microsoft to build scalable, production-ready AI products.',
    ],
  },
]

const typeBadge = {
  'Full-time': 'bg-green-100 text-green-700',
  Contract: 'bg-yellow-100 text-yellow-700',
  Startup: 'bg-purple-100 text-purple-700',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Experience</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>

          <div className="space-y-10">
            {experiences.map(({ role, company, location, period, type, bullets }, i) => (
              <div key={i} className="md:pl-16 relative">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm hidden md:block"></div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-blue-200 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">{role}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBadge[type]}`}>{type}</span>
                      </div>
                      <p className="text-blue-600 font-semibold">{company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-slate-500 text-right">
                      <span className="flex items-center gap-1 justify-end"><Calendar size={14} /> {period}</span>
                      <span className="flex items-center gap-1 justify-end"><MapPin size={14} /> {location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                        <span className="text-blue-400 mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
