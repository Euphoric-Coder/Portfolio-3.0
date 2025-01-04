import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const educationData = [
//   {
//     degree: "Bachelor's in Data Science & Appl.",
//     institution: "Indian Institute of Technology, Madras",
//     year: "2024-2027",
//     description: "Specialized in Artificial Intelligence and Machine Learning",
//   },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Birla Institute of Technology and Science, Pilani",
    year: "2023-2027",
    description: "Graduated with honors, focused on Web Technologies",
  },
  {
    degree: "High School Diploma",
    institution: "M.P. Birla Foundation Hr. Sec School",
    year: "2009-2023",
    description: "Computer Science major with distinction",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-neutral-400">
          Education
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-800 md:left-1/2" />
          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                  {index % 2 === 0 && (
                    <Card className="bg-black/50 border-gray-800 rounded-3xl">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                        <p className="text-gray-400 mt-2">{edu.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">
                  <div className="w-9 h-9 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-2">
                  {index % 2 === 1 && (
                    <Card className="bg-black/50 border-gray-800">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                        <p className="text-gray-400 mt-2">{edu.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
