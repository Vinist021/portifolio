import { GitHub } from "../../../../shared/icons/github";

const defaultCVData = {
  name: 'Vinicius Teixeira',
  title: 'Desenvolvedor Fullstack',
  phone: '(15) 99184-3750',
  email: 'viniciusds.teixeira03@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/vinicius-dos-santos-teixeira/',
  githubUrl: 'https://github.com/Vinist021',
  education: [
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia de Sorocaba',
      period: '(Cursando, fev/2024 - dez/2027)',
    },
  ],
  languages: ['Inglês - Avançado'],
  technologies: [
    {
      category: 'Linguagens',
      items: ['JavaScript', 'TypeScript', 'Java'],
    },
    {
      category: 'Frameworks/libs',
      items: ['Next.js', 'NestJS', 'React', 'SpringBoot'],
    },
    {
      category: 'Bancos de dados',
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Ferramentas',
      items: ['Git', 'Swagger', 'Postman', 'Docker'],
    },
  ],
  experience: [
    {
      company: 'Ousion Tecnologia',
      position: 'Desenvolvedor Fullstack',
      period: 'Out/2025 - Atual',
      description: [
        'Atuação na manutenção e desenvolvimento de sistemas de alto valor estratégico, incluindo ERPs e aplicações de alta demanda;',
        'Desenvolvimento frontend com Next.js e React de interfaces responsivas para mobile e desktop focadas na experiência do usuário;',
        'Desenvolvimento de APIs REST utilizando NestJS com arquitetura hexagonal;',
        'Adoção a boas práticas de programação backend e frontend.',
      ],
    },
  ],
};

export default function CVComponent({ data = defaultCVData }) {
  return (
    <div className="w-full bg-gray-100 p-2 md:p-4 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-blue-600" />

        <div className="ml-15 p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">{data.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{data.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-gray-700">
              <div className="flex items-center gap-3">
                {/* <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" /> */}
                <span className="text-sm">{data.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                {/* <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" /> */}
                <a
                  href={`mailto:${data.email}`}
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  {data.email}
                </a>
              </div>

              <div className="flex items-center gap-3 md:col-span-2">
                {/* <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0" /> */}
                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  linkedin.com/in/vinicius-dos-santos-teixeira/
                </a>
              </div>

              <div className="flex items-center gap-3 md:col-span-2">
                 <GitHub className="w-5 h-5 text-black-600 flex-shrink-0" />
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  github.com/Vinist021
                </a>
              </div>
            </div>
          </header>

          <section className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-2 rounded-sm font-semibold text-lg mb-4">
              Formação
            </div>
            <ul className="space-y-2 text-gray-800 ">
              {data.education.map((edu, idx) => (
                <li key={idx}>
                  <span className="text-sm">{edu.degree} - {edu.institution}</span> 
                  <div className="text-gray-600 text-sm ml-6">{edu.period}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-2 rounded-sm font-semibold text-lg mb-4">
              Idiomas
            </div>
            <ul className="space-y-1 text-gray-800">
              {data.languages.map((lang, idx) => (
                <li key={idx} className=" text-sm">
                  {lang}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-2 rounded-sm font-semibold text-lg mb-4">
              Tecnologias
            </div>
            <ul className="space-y-2 text-gray-800">
              {data.technologies.map((tech, idx) => (
                <li key={idx} className=" text-sm">
                  <span className="font-medium">{tech.category}:</span> {tech.items.join(', ')}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-2 rounded-sm font-semibold text-lg mb-4">
              Experiência
            </div>

            <div>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">{exp.company}:</h3>
                  <p className="font-bold text-gray-800 mb-2">
                    {exp.position}{' '}
                    <span className="font-normal text-gray-600 text-sm">({exp.period})</span>
                  </p>

                  <ul className="space-y-2 text-gray-800">
                    {exp.description.map((desc, descIdx) => (
                      <li key={descIdx} className="text-sm">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}