import { Briefcase, PlayCircle } from 'lucide-react';
import { resumeData } from '../utils/resumeData';
import { useState } from 'react';

const WorkExperience: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-container">
      <h2 className="section-title">
        <Briefcase size={20} className="text-primary" /> 内容与社群运营经历
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.workExperience.map((exp, index) => (
          <div key={index} className="flex flex-col gap-3 relative pl-4 border-l-2 border-anthropic-light-gray hover:border-primary transition-colors">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-anthropic-light border-2 border-primary"></div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{exp.company}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark">{exp.role}</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-primary text-sm sm:ml-auto">{exp.period}</span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-3 text-sm text-anthropic-dark/80">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="marker:text-anthropic-mid">
                  <div>
                    <span className="font-headings font-semibold text-anthropic-dark">{highlight.label}：</span>
                    {highlight.content}
                  </div>
                  
                  {('videoUrl' in highlight) && highlight.videoUrl && (
                    <div className="mt-2 no-print">
                      {activeVideo === highlight.videoUrl ? (
                        <div className="rounded-lg overflow-hidden border border-anthropic-light-gray/50 shadow-sm max-w-2xl bg-black mt-2">
                          <video 
                            src={highlight.videoUrl as string} 
                            controls 
                            autoPlay 
                            className="w-full aspect-video"
                          >
                            您的浏览器不支持视频播放。
                          </video>
                        </div>
                      ) : (
                        <button 
                          onClick={() => setActiveVideo(highlight.videoUrl as string)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 bg-anthropic-light-gray/30 hover:bg-anthropic-light-gray/50 text-anthropic-dark rounded-md text-sm font-medium transition-colors border border-anthropic-light-gray"
                        >
                          <PlayCircle size={16} className="text-primary" />
                          <span>查看视频</span>
                        </button>
                      )}
                    </div>
                  )}
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
