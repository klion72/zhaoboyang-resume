import { BarChart3, PlayCircle } from 'lucide-react';
import { resumeData } from '../utils/resumeData';
import { useState } from 'react';

const CampusProjects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-container">
      <h2 className="section-title">
        <BarChart3 size={20} className="text-tertiary" /> 校园项目与专业实践
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.campusProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 relative pl-4 border-l-2 border-anthropic-light-gray hover:border-tertiary transition-colors">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-anthropic-light border-2 border-tertiary"></div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-headings font-semibold text-anthropic-dark text-[15px]">{project.title}</span>
              <span className="text-anthropic-mid">|</span>
              <span className="text-anthropic-dark">{project.role}</span>
              <span className="text-anthropic-mid hidden sm:inline">|</span>
              <span className="text-tertiary text-sm sm:ml-auto">{project.period}</span>
            </div>
            {project.items ? (
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-anthropic-dark/80">
                {project.items.map((item, idx) => (
                  <li key={idx} className="marker:text-anthropic-mid">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-anthropic-dark/80">{project.content}</p>
            )}
            
            {project.videoUrl && (
              <div className="mt-2 no-print">
                {activeVideo === project.videoUrl ? (
                  <div className="rounded-lg overflow-hidden border border-anthropic-light-gray/50 shadow-sm max-w-2xl bg-black">
                    <video 
                      src={project.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full aspect-video"
                    >
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                ) : (
                  <button 
                    onClick={() => setActiveVideo(project.videoUrl as string)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-anthropic-light-gray/30 hover:bg-anthropic-light-gray/50 text-anthropic-dark rounded-md text-sm font-medium transition-colors border border-anthropic-light-gray"
                  >
                    <PlayCircle size={16} className="text-primary" />
                    <span>查看作品视频</span>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusProjects;
