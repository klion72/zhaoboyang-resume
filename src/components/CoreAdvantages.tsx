import { Star } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const CoreAdvantages: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <Star size={20} className="fill-primary text-primary" /> 核心优势
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.coreAdvantages.map((advantage, index) => (
          <div key={index} className="flex flex-col gap-1 p-5 bg-transparent rounded-2xl border-none transition-colors">
            <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{advantage.title}</span>
            <p className="text-sm text-anthropic-dark/80 leading-relaxed">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreAdvantages;
