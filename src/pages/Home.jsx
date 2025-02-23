
import { useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import ProjectCard from '../components/project/ProjectCard';

export default function Home() {
  const [category, setCategory] = useState('all');
  
  const categories = ['All', 'Tech', 'Art', 'Social'];
  const stats = {
    totalProjects: 1234,
    totalFunding: '5.2M'
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center">Fund Amazing Projects</h1>
        <div className="mt-8">
          <SearchBar onSearch={(query) => console.log(query)} />
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Urgent Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CauseCard 
            cause={{
              title: "Education for Children in Need",
              description: "Support children's education by providing essential supplies and resources.",
              category: "Education",
              raised: 15000,
              goal: 25000,
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
            }}
          />
          <CauseCard 
            cause={{
              title: "Palestinian Refugee Support",
              description: "Provide emergency shelter and basic necessities for displaced families.",
              category: "Emergency Aid",
              raised: 28000,
              goal: 50000,
              image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
            }}
          />
          <CauseCard 
            cause={{
              title: "Gaza Medical Aid",
              description: "Supply urgent medical supplies and support healthcare services.",
              category: "Medical",
              raised: 42000,
              goal: 75000,
              image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
            }}
          />
        </div>
      </section>

      <section className="py-8">
        <div className="flex gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded ${
                category === cat.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setCategory(cat.toLowerCase())}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will be mapped here */}
        </div>
      </section>

      <section className="py-8 bg-gray-50 rounded-lg mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Platform Stats</h2>
          <div className="flex justify-center gap-12 mt-6">
            <div>
              <p className="text-4xl font-bold text-blue-500">{stats.totalProjects}</p>
              <p className="text-gray-600">Projects Funded</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-500">${stats.totalFunding}</p>
              <p className="text-gray-600">Total Donations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
