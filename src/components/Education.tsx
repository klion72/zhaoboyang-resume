import { GraduationCap } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const Education: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <GraduationCap size={20} className="text-secondary" /> 教育背景
      </h2>
      <div className="flex flex-col gap-2">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-1 p-4 bg-anthropic-light-gray/20 rounded-lg">
            <div className="flex flex-wrap items-end gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-[15px] leading-none">{edu.school}</span>
              <span className="text-anthropic-mid leading-none">|</span>
              <span className="text-anthropic-dark leading-none">{edu.major} ({edu.degree})</span>
              <span className="text-anthropic-mid hidden sm:inline leading-none">|</span>
              <span className="text-secondary text-sm sm:ml-auto leading-none">{edu.period}</span>
            </div>
            <p className="text-sm text-anthropic-dark/80 mt-1">主修课程：{edu.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
