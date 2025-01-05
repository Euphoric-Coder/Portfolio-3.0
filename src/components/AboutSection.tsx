import { User, Code, Rocket, Book } from "lucide-react";
import { Card } from "@/components/ui/card";

const aboutCards = [
  {
    icon: User,
    title: "Who Am I?",
    description:
      "A passionate full-stack developer specializing in crafting scalable web applications and seamless user experiences. With 5+ years in tech, I've worked with startups and enterprise-level companies to bring impactful ideas to life.",
  },
  {
    icon: Code,
    title: "My Tech Stack",
    description:
      "Frontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Python, FastAPI\nCloud: AWS, Docker, Kubernetes\nDatabases: PostgreSQL, MongoDB, Redis",
  },
  {
    icon: Rocket,
    title: "What Drives Me",
    description:
      "Building innovative solutions, mentoring aspiring developers, and staying ahead in tech trends. I thrive in fast-paced environments and love solving complex problems that make a difference.",
  },
  {
    icon: Book,
    title: "Certifications & Education",
    description:
      "Master's in Data Science, IIT Madras\nBachelor's in Computer Science, BITS Pilani\nAWS Certified Developer - Associate\nGoogle Cloud Professional Engineer",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col items-start">
                {/* Icon */}
                <card.icon className="h-10 w-10 mb-6 text-gray-300" />
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
