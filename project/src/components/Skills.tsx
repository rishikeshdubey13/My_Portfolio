import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  'DevOps': ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
};

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-3 text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}