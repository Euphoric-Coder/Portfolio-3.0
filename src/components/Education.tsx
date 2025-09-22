import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const educationData = [
  // {
  //   degree: "Bachelor's in Computer Science",
  //   institution: "University of London",
  //   year: "2025-2028",
  //   description: "Graduated with First Class honors, focused on Web and Mobile Development.",
  // },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Birla Institute of Technology and Science, Pilani",
    year: "2023-2027",
    description: "Graduated with honors, focused on Web Technologies.",
  },
  {
    degree: "High School Diploma",
    institution: "M.P. Birla Foundation Hr. Sec School",
    year: "2009-2023",
    description: "Computer Science major with distinction.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gray-700" />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 rounded-full border-2 border-gray-800 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0
                    ? "pl-8 md:pl-0 md:pr-1"
                    : "pr-8 md:pr-0 md:pl-1"
                }`}
              >
                <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300">
                  <CardContent>
                    <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
