import { GraduationCap } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const Education: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <GraduationCap size={20} className="text-secondary" /> 教育背景
      </h2>
      <div className="flex flex-col gap-3">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-1 p-5 bg-transparent border-none rounded-2xl">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{edu.school}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark">{edu.major} ({edu.degree})</span>
              <span className="text-anthropic-mid hidden xl:inline">|</span>
              <span className="text-secondary text-sm xl:ml-auto font-medium">{edu.period}</span>
            </div>
            <p className="text-sm text-anthropic-dark/80 mt-1">主修课程：{edu.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
