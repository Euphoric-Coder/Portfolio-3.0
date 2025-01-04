import { User, Code, Rocket, Book } from 'lucide-react';
import { Card } from "@/components/ui/card";

const aboutCards = [
  {
    icon: User,
    title: "Background",
    description: "With over 5 years of experience in web development, I specialize in creating beautiful, functional, and user-friendly applications. Previously worked at top tech companies like Google and Amazon."
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Frontend: React, Vue.js, TypeScript, Next.js\nBackend: Node.js, Python, Go\nCloud: AWS, GCP, Docker\nDatabases: PostgreSQL, MongoDB"
  },
  {
    icon: Rocket,
    title: "Achievements",
    description: "Led 10+ successful product launches\nMentored 20+ junior developers\nContributed to open source projects\nSpoke at tech conferences"
  },
  {
    icon: Book,
    title: "Education",
    description: "Master's in Computer Science\nBachelor's in Software Engineering\nAWS Certified Solutions Architect\nGoogle Cloud Certified"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => (
            <Card key={index} className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <card.icon className="h-8 w-8 mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}