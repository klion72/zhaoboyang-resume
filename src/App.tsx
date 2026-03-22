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
    <div className="min-h-screen bg-[#F5F5F7] py-8 px-4 md:py-12 font-sans text-[#1D1D1F]">
      <div className="max-w-[1024px] mx-auto">
        <PrintButton />
        
        <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-12">
            <PersonalInfo />
          </div>
          <div className="col-span-1 md:col-span-12">
            <Showcases />
          </div>
          <div className="col-span-1 md:col-span-12">
            <CoreAdvantages />
          </div>
          <div className="col-span-1 md:col-span-12">
            <WorkExperience />
          </div>
          <div className="col-span-1 md:col-span-12">
            <CampusProjects />
          </div>
          <div className="col-span-1 md:col-span-12">
            <Education />
          </div>
          <div className="col-span-1 md:col-span-12">
            <Skills />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
