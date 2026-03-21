import { Wrench } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const Skills: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <Wrench size={20} className="text-secondary" /> 专业技能
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1.5 p-4 bg-anthropic-light-gray/20 rounded-xl border border-anthropic-light-gray/30">
            <span className="font-headings font-semibold text-anthropic-dark text-base">{skill.category}</span>
            <p className="text-[15px] text-anthropic-dark/85">{skill.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
