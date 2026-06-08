export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-10">
        <div className="border-l-2 border-cyan-500 pl-6">
          <h3 className="text-2xl font-semibold">
            Software Engineer Trainee
          </h3>

          <p className="text-cyan-400">
            Vembu Technologies
          </p>

          <p className="text-gray-500 mb-4">
            Nov 2024 – Jan 2025
          </p>

          <ul className="text-gray-400 space-y-2">
            <li>
              Explored enterprise-scale software systems and development workflows
            </li>
            <li>
              Investigated software defects and participated in debugging activities
            </li>
            <li>
              Learned software architecture concepts and backend development practices
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-cyan-500 pl-6">
          <h3 className="text-2xl font-semibold">
            Machine Learning Intern
          </h3>

          <p className="text-cyan-400">
            Datayaan Solutions Pvt Ltd
          </p>

          <p className="text-gray-500 mb-4">
            Jun 2023 – Jul 2023
          </p>

          <ul className="text-gray-400 space-y-2">
            <li>
              Worked with Oil & Gas datasets using Python and Excel
            </li>
            <li>
              Built and evaluated machine learning models
            </li>
            <li>
              Applied RMSE and R² metrics for model evaluation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}