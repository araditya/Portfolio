const skillCategories = [
  {
    category: 'AI & Product',
    skills: ['GenAI / LLMs', 'RAG Architecture', 'Multi-Agent Systems', 'Prompt Engineering', 'Model Evaluation', 'AI Safety & Quality', 'Agentic Workflows', 'AI Product Strategy'],
  },
  {
    category: 'Domain Expertise',
    skills: ['Enterprise AI Applications', 'PLM Systems', 'ERP', 'Supply Chain Analytics', 'BOM Optimization', 'EOL Management', 'LEAN / Six Sigma', 'Hyperscale Infrastructure'],
  },
  {
    category: 'Engineering & Data',
    skills: ['Python', 'SQL', 'React Native', 'Node.js / Express', 'Azure', 'ADO / SharePoint', 'Streamlit', 'Pandas / NumPy'],
  },
  {
    category: 'Program Management',
    skills: ['Roadmap Planning', 'Stakeholder Alignment', 'OKRs / KPIs', 'Cross-functional Leadership', 'NPI Programs', 'Executive Presentations', 'Agile / Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Skills</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A blend of deep AI/ML expertise, enterprise domain knowledge, and product leadership.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
