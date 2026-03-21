import { BarChart3 } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const CampusProjects: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <BarChart3 size={20} className="text-tertiary" /> 校园项目与专业实践
      </h2>
      <div className="flex flex-col gap-8">
        {resumeData.campusProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4 relative pl-5 border-l-[3px] border-anthropic-light-gray hover:border-tertiary transition-colors">
            <div className="absolute -left-[10.5px] top-1.5 w-4 h-4 rounded-full bg-anthropic-light border-[3px] border-tertiary"></div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-base">{project.title}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark font-medium">{project.role}</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-tertiary text-[15px] sm:ml-auto">{project.period}</span>
            </div>
            {project.items ? (
              <ul className="list-disc list-outside pl-4 space-y-3 text-[15px] text-anthropic-dark/85">
                {project.items.map((item, idx) => (
                  <li key={idx} className="marker:text-anthropic-mid">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-[15px] text-anthropic-dark/85">{project.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusProjects;
