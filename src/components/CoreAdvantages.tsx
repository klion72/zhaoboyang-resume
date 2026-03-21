import { Star } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const CoreAdvantages: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">
        <Star size={20} className="fill-primary text-primary" /> 核心优势
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {resumeData.coreAdvantages.map((advantage, index) => (
          <div key={index} className="flex flex-col gap-2 p-5 bg-anthropic-light-gray/30 rounded-xl border border-anthropic-light-gray/50 hover:border-primary/30 transition-colors">
            <span className="font-headings font-semibold text-anthropic-dark text-base">{advantage.title}</span>
            <p className="text-[15px] text-anthropic-dark/80 leading-relaxed">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreAdvantages;
