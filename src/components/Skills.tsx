import { Wrench } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const Skills: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <Wrench size={20} className="text-secondary" /> 专业技能
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1 p-4 bg-transparent border-none rounded-2xl">
            <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{skill.category}</span>
            <p className="text-sm text-anthropic-dark/80">{skill.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
