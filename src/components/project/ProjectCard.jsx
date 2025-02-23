
import { ProgressBar } from './ProgressBar';

export default function ProjectCard({ project }) {
  const { title, creator, description, thumbnail, funded, goal, deadline } = project;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">by {creator}</p>
        <p className="mt-2 text-gray-700 line-clamp-2">{description}</p>
        <ProgressBar value={(funded/goal) * 100} />
        <div className="mt-4 flex justify-between text-sm">
          <span>${funded} raised</span>
          <span>{new Date(deadline).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
