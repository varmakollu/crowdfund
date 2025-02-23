
import { ProgressBar } from './ProgressBar';

export default function CauseCard({ cause }) {
  return (
    <div className="transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
      <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">{cause.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800">{cause.title}</h3>
        <p className="mt-2 text-gray-600">{cause.description}</p>
        <ProgressBar value={(cause.raised/cause.goal) * 100} />
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">${cause.raised}</p>
            <p className="text-sm text-gray-500">raised of ${cause.goal}</p>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Support Now
          </button>
        </div>
      </div>
    </div>
  );
}
