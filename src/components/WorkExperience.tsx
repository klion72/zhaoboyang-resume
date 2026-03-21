import { Briefcase } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const WorkExperience: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <Briefcase size={20} className="text-primary" /> 内容与社群运营经历
      </h2>
      <div className="flex flex-col gap-8">
        {resumeData.workExperience.map((exp, index) => (
          <div key={index} className="flex flex-col gap-4 relative pl-5 border-l-[3px] border-anthropic-light-gray hover:border-primary transition-colors">
            <div className="absolute -left-[10.5px] top-1.5 w-4 h-4 rounded-full bg-anthropic-light border-[3px] border-primary"></div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-base">{exp.company}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark font-medium">{exp.role}</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-primary text-[15px] sm:ml-auto">{exp.period}</span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-4 text-[15px] text-anthropic-dark/85">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="marker:text-anthropic-mid">
                  <div>
                    <span className="font-headings font-semibold text-anthropic-dark">{highlight.label}：</span>
                    {highlight.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
