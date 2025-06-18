import { images } from '../constants/images';
import '../utils/Achievements.css'

const Achievements = () => {
  return (
    <div id='achievements' className='text-white mt-25 bg-blue-500/20 pt-20 pb-18'>
      <div className="achievements-container ml-20">
        <h1 className='text-5xl poppins-bold mb-8 underline text-indigo-200'>Achievements</h1>

        {/* Image Slider */}
        <div className="slider-container ml-8 relative w-[600px] h-[350px] overflow-hidden mt-12 rounded-md border-3 border-indigo-300">
          <div className="slider-box flex animate-slide w-[1800px] h-full">
            <img src={images.hack1} alt="Hackathon 1" className="w-[600px] h-[350px] object-cover" />
            <img src={images.hack2} alt="Hackathon 2" className="w-[600px] h-[350px] object-cover" />
            <img src={images.hack3} alt="Hackathon 3" className="w-[600px] h-[350px] object-cover" />
          </div>
        </div>

        {/* Achievement Details */}
        <div className="details ml-5 w-[600px] mt-6 p-4 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-indigo-100">Runner-up – GCEM Hacks 2025</h2>
          <p className="mt-2 text-[18px] text-gray-300">
            Developed <strong>FitCommunity</strong>, a fitness community-driven app that encourages healthy habits
            through social challenges and progress tracking. Worked in a team of 3 (<span className='font-bold'>Team - Runtime Terrors</span>) and secured 2nd place among 20+ teams.
            My role focused on front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
