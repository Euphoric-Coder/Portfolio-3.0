import { User, Code, Rocket, Book } from "lucide-react";
import { Card } from "@/components/ui/card";

const aboutCards = [
  {
    icon: User,
    title: "Who Am I?",
    description:
      "A Full-Stack Developer and Computer Science undergraduate, building modern web apps with MERN, Next.js, and AI integrations. Experienced in hackathons, internships, and creating impactful projects blending clean UI/UX with intelligent backends.",
  },
  {
    icon: Code,
    title: "My Tech Stack",
    description:
      "Frontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Python, FastAPI\nDatabases: PostgreSQL, MongoDB, ConvexDB\nAI/ML: LangChain, OpenAI, Replicate, Pinecone\nField of Interest: Full-Stack Development, HCI",
  },
  {
    icon: Rocket,
    title: "What Drives Me",
    description: `I'm driven by the challenge of turning complex ideas into intuitive, impactful applications — blending clean design, modern full-stack engineering, and AI to build tools that solve real problems. What excites me is not just coding, but crafting experiences that are useful, scalable, and polished enough to stand out.`,
  },
  {
    icon: Book,
    title: "Passion for Learning",
    description:
      "Passionate about full-stack development, cloud computing, and AI/ML, with experience building scalable web apps using MERN, Next.js, and LangChain. I enjoy exploring new frameworks, databases, and tools to turn ideas into impactful projects.",
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
