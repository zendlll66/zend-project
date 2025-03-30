'use client';
import React, { useState } from 'react';

// Define component categories and their items
const componentData = {
  buttons: [
    {
      id: 'btn1',
      name: 'Primary Button',
      description: 'Standard primary button with hover effect',
      component: (
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
          Primary Button
        </button>
      ),
      code: `<button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
  Primary Button
</button>`
    },
    {
      id: 'btn2',
      name: 'Secondary Button',
      description: 'Outlined secondary button style',
      component: (
        <button className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
          Secondary Button
        </button>
      ),
      code: `<button className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
  Secondary Button
</button>`
    }
  ],
  navigation: [
    {
      id: 'nav1',
      name: 'Simple Nav',
      description: 'Basic navigation menu',
      component: (
        <div className="flex space-x-4 bg-[#090b0f]/40 p-4 rounded-lg">
          <a href="#" className="text-white hover:text-red-500 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">About</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">Contact</a>
        </div>
      ),
      code: `<div className="flex space-x-4 bg-[#090b0f]/40 p-4 rounded-lg">
  <a href="#" className="text-white hover:text-red-500 transition-colors">Home</a>
  <a href="#" className="text-white hover:text-red-500 transition-colors">About</a>
  <a href="#" className="text-white hover:text-red-500 transition-colors">Contact</a>
</div>`
    }
  ],
  cards: [
    {
      id: 'card1',
      name: 'Info Card',
      description: 'Basic information card with hover effect',
      component: (
        <div className="bg-[#06060a]/60 p-6 rounded-lg border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
          <p className="text-[#A7A7A7]">Card description goes here.</p>
        </div>
      ),
      code: `<div className="bg-[#06060a]/60 p-6 rounded-lg border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300">
  <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
  <p className="text-[#A7A7A7]">Card description goes here.</p>
</div>`
    }
  ]
};

const MyComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('buttons');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen pt-[120px] px-4 md:px-8 max-w-7xl mx-auto">
      <button className='text-white text-sm mb-4 bg-[#FF3035] px-3 py-1 rounded-2xl cursor-pointer' onClick={() => window.history.back()}>
        back
      </button>
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 ">
        Component Showcase
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(componentData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${selectedCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-[#06060a]/60 text-white hover:bg-[#221B20]/50'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {componentData[selectedCategory as keyof typeof componentData].map((item) => (
          <div
            key={item.id}
            className="bg-[#090b0f]/40 backdrop-blur-xl border border-[#221B20] rounded-lg overflow-hidden"
          >
            {/* Component Preview */}
            <div className="p-6 flex flex-col items-center justify-center min-h-[200px] bg-[#06060a]/30">
              {item.component}
            </div>

            {/* Component Info */}
            <div className="p-6 border-t border-[#221B20]">
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-[#A7A7A7] mb-4">{item.description}</p>

              {/* Code Block */}
              <div className="relative">
                <pre className="bg-[#06060a] p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-[#A7A7A7]">{item.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(item.code, item.id)}
                  className="absolute top-2 right-2 px-3 py-1 text-sm bg-[#221B20] text-white rounded hover:bg-[#321B20] transition-colors"
                >
                  {copiedId === item.id ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyComponent;
