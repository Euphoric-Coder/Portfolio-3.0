import { Badge } from "./ui/badge";
import { Card } from "@/components/ui/card";

const skillsData = {
  "Frontend Development": [
    "React",
    "Vue.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Redux",
    "GraphQL",
  ],
  "Backend Development": [
    "Node.js",
    "Python",
    "Java",
    "Express.js",
    "Django",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  "DevOps & Tools": [
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "CI/CD",
    "Linux",
    "Nginx",
    "Jenkins",
    "Terraform",
    "Prometheus",
  ],
  "Soft Skills": [
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Agile Methodology",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
          Skills
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col items-start">
                {/* Skill Category Heading */}
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                  {category}
                </h3>
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full hover:bg-gray-600 hover:scale-105 cursor-pointer transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
