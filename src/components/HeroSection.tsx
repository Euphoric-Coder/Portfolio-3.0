import { GithubIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-sm text-gray-400">
              Welcome to my portfolio
            </span>
          </div>
        </div>

        <div className="mb-8">
          <img
            src={import.meta.env.VITE_PUBLIC_PROFILE_PHOTO}
            alt="Sagnik Dey"
            className="w-48 h-48 rounded-full object-fill mx-auto border-2 border-gray-800"
            draggable={false}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text">
          Sagnik Dey
        </h1>

        <div className="text-2xl md:text-3xl font-bold p-2 text-gray-400 mb-8">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Cloud Computing & DevOps Enthusiast",
                "Exploring Modern Tech & Innovation",
                "Passionate About Clean UI/UX",
                "Turning Ideas into Scalable Apps",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="group hover:border-white/50 transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Contact Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group hover:border-white/50 transition-all duration-300"
          >
            <GithubIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
