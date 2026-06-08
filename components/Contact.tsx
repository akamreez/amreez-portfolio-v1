export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-bold">
        Let's Connect
      </h2>

      <p className="text-gray-400 mt-6 text-lg">
        I'm currently open to Software Engineering,
        Backend Development, and AI/ML opportunities.
      </p>

      <div className="flex justify-center gap-4 mt-10 flex-wrap">

  <a
    href="mailto:amreezkhan786@gmail.com"
    className="bg-white text-black px-6 py-3 rounded-full font-semibold"
  >
    Email
  </a>

  <a
    href="https://github.com/akamreez"
    target="_blank"
    className="border border-white/20 px-6 py-3 rounded-full"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/amreez-khan-a242b61b9/"
    target="_blank"
    className="border border-white/20 px-6 py-3 rounded-full"
  >
    LinkedIn
  </a>

</div>
    </section>
  );
}