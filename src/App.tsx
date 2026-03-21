import PersonalInfo from './components/PersonalInfo';
import Showcases from './components/Showcases';
import CoreAdvantages from './components/CoreAdvantages';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CampusProjects from './components/CampusProjects';
import Skills from './components/Skills';
import PrintButton from './components/PrintButton';

function App() {
  return (
    <div className="min-h-screen bg-[#e8e6dc] py-8 px-4 md:py-12 font-body text-[#141413]">
      <div className="max-w-[960px] mx-auto bg-[#faf9f5] rounded-2xl shadow-xl shadow-[#141413]/10 p-6 md:p-10 border border-[#b0aea5]/30">
        <PrintButton />
        
        <main className="space-y-0">
          <PersonalInfo />
          <Showcases />
          <CoreAdvantages />
          <Education />
          <WorkExperience />
          <CampusProjects />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
