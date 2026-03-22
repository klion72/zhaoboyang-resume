import { Phone, Mail, MapPin, Calendar, Lightbulb, Gamepad2 } from 'lucide-react';
import { resumeData } from '../utils/resumeData';

const PersonalInfo: React.FC = () => {
  const { name, phone, email, location, birthDate, tagline, interests } = resumeData.personalInfo;

  return (
    <header className="py-6 md:py-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 左侧个人信息 */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-headings font-bold text-anthropic-dark mb-2">{name}</h1>
          <h2 className="text-xl text-anthropic-dark/60 font-headings mb-6">{resumeData.personalInfo.role || "内容运营 / 社群运营"}</h2>
          
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-anthropic-dark/80 text-sm">
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-anthropic-dark/40" /> {phone}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-anthropic-dark/40" /> {email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-anthropic-dark/40" /> {location}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-anthropic-dark/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-anthropic-dark/40" /> {birthDate}
              </span>
              <span className="flex items-center gap-2">
                <Lightbulb size={16} className="text-anthropic-dark/40" /> {tagline}
              </span>
              <span className="flex items-center gap-2">
                <Gamepad2 size={16} className="text-anthropic-dark/40" /> {interests}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PersonalInfo;
