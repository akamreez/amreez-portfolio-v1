export default function Projects() {
  const projects = [
    {
      title: "MiniKintsugi",
      description:
        "Cloud-hosted transaction risk assessment platform built using Spring Boot and PostgreSQL with automated risk scoring and REST APIs.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Railway"],
      live: "https://minikintsugi-production.up.railway.app/",
      github: "",
    },

    {
      title: "NYC Taxi Fare Prediction",
      description:
        "Machine learning model trained on 500K+ taxi trips using feature engineering and XGBoost.",
      tech: ["Python", "XGBoost", "Pandas"],
      github:
        "https://github.com/akamreez/netflix-stock-prediction",
    },

    {
      title: "Personalized Cancer Diagnosis",
      description:
        "Text classification pipeline using TF-IDF and Logistic Regression for cancer diagnosis prediction.",
      tech: ["Python", "Scikit-Learn", "NLP"],
      github:
        "https://github.com/akamreez/personalizedcancerdiagnosis_machine_learning_project",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-cyan-400"
                >
                  Live Demo →
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-cyan-400"
                >
                  GitHub →
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}