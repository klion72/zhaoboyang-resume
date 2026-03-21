import { BarChart3 } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const CampusProjects: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <BarChart3 size={20} className="text-tertiary" /> 校园项目与专业实践
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.campusProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 relative pl-4 border-l-2 border-anthropic-light-gray hover:border-tertiary transition-colors">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-anthropic-light border-2 border-tertiary"></div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{project.title}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark">{project.role}</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-tertiary text-sm sm:ml-auto">{project.period}</span>
            </div>
            {project.items ? (
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-anthropic-dark/80 m-0">
                {project.items.map((item, idx) => (
                  <li key={idx} className="marker:text-anthropic-mid">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-anthropic-dark/80 m-0">{project.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusProjects;
