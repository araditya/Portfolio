import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const projects = [
  {
    title: 'AdiGarud Solutions',
    description: 'AI solutions startup applying generative AI and LLM-powered products to real-world problems — built on enterprise-grade patterns from Microsoft with end-to-end ownership across product, architecture, and engineering.',
    tags: ['GenAI', 'LLMs', 'Product', 'Startup'],
    badge: 'Startup',
  },
  {
    title: 'AI Sports Coach',
    description: 'An intelligent sports coaching mobile app (Expo/React Native) that provides personalised training recommendations and performance analysis powered by AI.',
    tags: ['React Native', 'Expo', 'AI', 'Mobile'],
  },
  {
    title: 'Job Search Assistant',
    description: 'AI-powered job search assistant with a Flask backend that parses job descriptions, matches skills, crafts tailored cover letters, and tracks application status.',
    tags: ['Python', 'Flask', 'NLP', 'AI'],
    github: 'https://github.com/araditya/Job-Search-Assistant',
  },
  {
    title: 'IPL Match Predictor',
    description: 'Machine learning app predicting IPL cricket match outcomes — calculates win probability for each team using ensemble methods and historical match data.',
    tags: ['Python', 'Scikit-learn', 'ML', 'Pandas'],
    github: 'https://github.com/araditya/IPL-Predictor',
  },
]

const badgeStyle = {
  Startup: 'bg-purple-100 text-purple-700',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Projects</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Personal builds and side projects outside of Microsoft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map(({ title, description, tags, github, live, badge }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                {badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeStyle[badge]}`}>{badge}</span>
                )}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {github && (
                  <a href={github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">
                    <GithubIcon size={15} /> Code
                  </a>
                )}
                {live && (
                  <a href={live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">
                    <ExternalLink size={15} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
