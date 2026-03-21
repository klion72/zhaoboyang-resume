import { PlayCircle, X } from 'lucide-react';
import { resumeData } from '../utils/resumeData';
import { useState } from 'react';

const Showcases: React.FC = () => {
  const showcases = resumeData.showcases || [];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (showcases.length === 0) return null;

  return (
    <section className="mt-8 no-print">
      <h2 className="section-title">
        <PlayCircle size={20} className="text-primary" /> 作品橱窗
      </h2>
      
      {/* 视频播放器区域 */}
      {activeVideo && (
        <div className="mb-6 bg-anthropic-light-gray/20 border border-anthropic-light-gray/50 rounded-xl p-4 transition-all duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-headings font-semibold text-anthropic-dark">
              {showcases.find(s => s.videoUrl === activeVideo)?.title}
            </h3>
            <button 
              onClick={() => setActiveVideo(null)}
              className="flex items-center gap-1 text-sm text-anthropic-mid hover:text-primary transition-colors bg-white px-3 py-1 rounded-full border border-anthropic-light-gray/50 shadow-sm"
            >
              <X size={14} /> 关闭视频
            </button>
          </div>
          <div className="rounded-lg overflow-hidden bg-black aspect-video shadow-sm">
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            >
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      )}

      {/* 作品列表（横向排列） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showcases.map((showcase, idx) => (
          <button
            key={idx}
            onClick={() => setActiveVideo(showcase.videoUrl)}
            className={`text-left p-4 rounded-xl border transition-all flex flex-col gap-1 group ${
              activeVideo === showcase.videoUrl 
                ? 'bg-white border-primary/40 shadow-md scale-[1.02]' 
                : 'bg-anthropic-light-gray/20 border-anthropic-light-gray/50 hover:bg-white hover:border-anthropic-light-gray hover:shadow-sm'
            }`}
          >
            <div className="flex items-start justify-between w-full">
              <span className={`font-headings font-semibold text-[15px] line-clamp-1 ${activeVideo === showcase.videoUrl ? 'text-primary' : 'text-anthropic-dark group-hover:text-primary transition-colors'}`}>
                {showcase.title}
              </span>
              <PlayCircle size={18} className={`${activeVideo === showcase.videoUrl ? 'text-primary' : 'text-anthropic-mid group-hover:text-primary transition-colors'}`} />
            </div>
            <span className="text-sm text-anthropic-dark/70 line-clamp-2 mt-1">
              {showcase.description}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Showcases;