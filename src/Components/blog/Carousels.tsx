import React from 'react';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Getting Started with React",
        description: "Learn the basics of React and start building modern web applications",
        category: "React",
        image: "/Assets/reactShadow.png"
    },
    {
        id: 2,
        title: "Mastering TypeScript",
        description: "Deep dive into TypeScript features and best practices",
        category: "TypeScript",
        image: "/Assets/tsShadow.png"
    },
    {
        id: 3,
        title: "Tailwind CSS Tips",
        description: "Essential tips and tricks for Tailwind CSS development",
        category: "CSS",
        image: "Assets/tailwindShadow.png"
    },
    // Add more blog posts as needed
];

const Carousels = () => {
    return (
        <div className="w-full max-w-[1260px] bg-[#090b0f]/40 backdrop-blur-xl border border-[#221B20] rounded-[20px] flex flex-col mb-[100px] px-4 sm:px-8 md:px-16 py-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10">
                Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#06060a]/60 rounded-lg overflow-hidden border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out"
                    >
                        <div className="relative h-48 overflow-hidden">
                            {/* <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 "
                            /> */}
                            {/* <span className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span> */}
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-[#A7A7A7] text-sm line-clamp-3">
                                {post.description}
                            </p>

                            <button className="mt-4 text-red-500 hover:text-red-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            <button className="mt-4 text-red-500 hover:text-red-400 transition-colors duration-300">
                Read More →
            </button>
        </div>
    );
};
export default Carousels;
