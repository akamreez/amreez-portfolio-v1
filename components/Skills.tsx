const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "REST APIs",
  "Machine Learning",
  "XGBoost",
  "Git",
  "Railway",
  "CI/CD",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-24 px-6">

      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-cyan-500/10 border border-cyan-500/30 px-5 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}