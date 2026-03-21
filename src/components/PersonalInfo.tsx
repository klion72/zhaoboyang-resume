import { Phone, Mail, MapPin, Calendar, Lightbulb, Gamepad2, PlayCircle } from 'lucide-react';
import { resumeData } from '../utils/resumeData';
import { useState } from 'react';

const PersonalInfo: React.FC = () => {
  const { name, phone, email, location, birthDate, tagline, interests } = resumeData.personalInfo;
  const showcases = resumeData.showcases || [];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <header className="border-b border-anthropic-light-gray pb-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        {/* 左侧个人信息 */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-dark mb-2">{name}</h1>
          <h2 className="text-xl text-secondary font-headings mb-6">{resumeData.personalInfo.role || "内容运营 / 社群运营"}</h2>
          
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-anthropic-dark/80 text-sm">
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-primary" /> {phone}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-primary" /> {email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> {location}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-anthropic-dark/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-tertiary" /> {birthDate}
              </span>
              <span className="flex items-center gap-2">
                <Lightbulb size={16} className="text-tertiary" /> {tagline}
              </span>
              <span className="flex items-center gap-2">
                <Gamepad2 size={16} className="text-tertiary" /> {interests}
              </span>
            </div>
          </div>
        </div>

        {/* 右侧作品橱窗 */}
        {showcases.length > 0 && (
          <div className="md:w-80 shrink-0 no-print">
            <div className="bg-anthropic-light-gray/20 border border-anthropic-light-gray/50 rounded-xl p-4 h-full">
              <h3 className="text-sm font-headings font-semibold text-anthropic-dark mb-3 flex items-center gap-2">
                <PlayCircle size={16} className="text-primary" />
                作品橱窗
              </h3>
              
              {activeVideo ? (
                <div className="mb-4">
                  <div className="rounded-lg overflow-hidden bg-black aspect-video mb-2 shadow-sm">
                    <video 
                      src={activeVideo} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    >
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="text-xs text-anthropic-mid hover:text-primary transition-colors"
                  >
                    关闭视频
                  </button>
                </div>
              ) : null}

              <div className="flex flex-col gap-2">
                {showcases.map((showcase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVideo(showcase.videoUrl)}
                    className={`text-left p-2.5 rounded-lg border transition-all ${
                      activeVideo === showcase.videoUrl 
                        ? 'bg-white border-primary/30 shadow-sm' 
                        : 'bg-white/50 border-anthropic-light-gray/30 hover:bg-white hover:border-anthropic-light-gray/80 hover:shadow-sm'
                    }`}
                  >
                    <div className="font-medium text-sm text-anthropic-dark mb-0.5 truncate">{showcase.title}</div>
                    <div className="text-xs text-anthropic-dark/60 truncate">{showcase.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PersonalInfo;
