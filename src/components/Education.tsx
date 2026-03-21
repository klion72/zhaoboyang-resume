import { GraduationCap } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const Education: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <GraduationCap size={20} className="text-secondary" /> 教育背景
      </h2>
      <div className="flex flex-col gap-4">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2 p-5 bg-anthropic-light-gray/20 rounded-xl border border-anthropic-light-gray/30">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-base">{edu.school}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark font-medium">{edu.major} ({edu.degree})</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-secondary text-[15px] sm:ml-auto">{edu.period}</span>
            </div>
            <p className="text-[15px] text-anthropic-dark/85 mt-1">主修课程：{edu.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
