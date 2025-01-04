import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

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
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card
              key={category}
              className="border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Skill Category Heading */}
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                  {category}
                </h3>
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800/60 text-gray-200 px-3 py-1 rounded-full hover:bg-gray-600 hover:scale-105 cursor-pointer transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
