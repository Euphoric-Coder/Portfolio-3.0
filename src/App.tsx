import { LinkedinIcon, Mail, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { projects } from "../src/userData";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="relative">
        <Navbar />
        <main className="pt-16">
          {" "}
          {/* Add padding for navbar */}
          <HeroSection />
          <AboutSection />
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <Skills />
              <Education />
              <div id="projects" className="mb-20"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <Projects />
            </div>
          </section>
          <footer
            id="contact"
            className="container mx-auto px-4 py-8 border-t border-gray-800/50"
          >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2024 John Developer. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 transition-colors"
                >
                  <GithubIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
