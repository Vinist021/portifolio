import { Mail } from "../../../../shared/icons/email";
import { Github } from "../../../../shared/icons/github";
import { Linkedin } from "../../../../shared/icons/linkedin";
import { Phone } from "../../../../shared/icons/phone";

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
      items: ['JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks/libs',
      items: ['Next.js', 'NestJS', 'React'],
    },
    {
      category: 'Bancos de dados',
      items: ['MySQL', 'PostgreSQL'],
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
        'Atuação na manutenção e desenvolvimento de sistemas de alto valor estratégico, incluindo ERPs, sistemas para laboratórios e outras aplicações de alta demanda;',
        'Desenvolvimento frontend com Next.js e React de interfaces responsivas para mobile e desktop focadas na experiência do usuário;',
        'Desenvolvimento de APIs REST utilizando NestJS com arquitetura hexagonal;',
        'Adoção a boas práticas de programação backend e frontend.',
      ],
    },
  ],
};

export default function CVComponent({ data = defaultCVData }) {
  return (
    <div className="flex w-full items-start justify-center bg-gray-100 p-0 md:p-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl relative">
        <div className="absolute bottom-0 left-0 top-0 w-3 bg-blue-600 sm:w-6 md:w-12" />

        <div className="ml-5 p-3 sm:ml-8 sm:p-5 md:ml-15 md:p-10">
          <header className="mb-5 md:mb-8">
            <h1 className="mb-1 break-words text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">{data.name}</h1>
            <p className="mb-4 text-base text-gray-600 sm:text-lg md:mb-6 md:text-xl">{data.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-gray-700">
              <div className="flex items-start gap-3 sm:items-center">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{data.phone}</span>
              </div>

              <div className="flex min-w-0 items-start gap-3 sm:items-center md:-ml-10">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${data.email}`}
                  className="cv-breakable text-sm transition-colors duration-200 hover:text-blue-600"
                >
                  {data.email}
                </a>
              </div>

              <div className="flex min-w-0 items-start gap-3 md:col-span-2 md:items-center">
                 <Linkedin className="w-5 h-5 flex-shrink-0" />
                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-breakable text-sm transition-colors duration-200 hover:text-blue-600"
                >
                  linkedin.com/in/vinicius-dos-santos-teixeira/
                </a>
              </div>

              <div className="flex min-w-0 items-start gap-3 md:col-span-2 md:items-center">
                 <Github className="w-5 h-5 flex-shrink-0" />
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-breakable text-sm transition-colors duration-200 hover:text-blue-600"
                >
                  github.com/Vinist021
                </a>
              </div>
            </div>
          </header>

          <section className="mb-5 md:mb-8">
            <div className="mb-4 block w-full rounded-sm bg-blue-600 px-3 py-2 text-base font-semibold text-white sm:inline-block sm:w-auto sm:px-6 md:px-8 md:text-lg">
              Formação
            </div>
            <ul className="space-y-2 text-gray-800 ">
              {data.education.map((edu, idx) => (
                <li key={idx}>
                  <span className="text-sm">{edu.degree} - {edu.institution}</span> 
                  <div className="ml-0 mt-1 text-sm text-gray-600 sm:ml-6">{edu.period}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-5 md:mb-8">
            <div className="mb-4 block w-full rounded-sm bg-blue-600 px-3 py-2 text-base font-semibold text-white sm:inline-block sm:w-auto sm:px-6 md:px-8 md:text-lg">
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

          <section className="mb-5 md:mb-8">
            <div className="mb-4 block w-full rounded-sm bg-blue-600 px-3 py-2 text-base font-semibold text-white sm:inline-block sm:w-auto sm:px-6 md:px-8 md:text-lg">
              Principais tecnologias
            </div>
            <ul className="space-y-2 text-gray-800">
              {data.technologies.map((tech, idx) => (
                <li key={idx} className=" text-sm">
                  <span className="font-medium">{tech.category}:</span> {tech.items.join(', ')}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-5 md:mb-8">
            <div className="mb-4 block w-full rounded-sm bg-blue-600 px-3 py-2 text-base font-semibold text-white sm:inline-block sm:w-auto sm:px-6 md:px-8 md:text-lg">
              Experiência
            </div>

            <div>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="break-words text-lg font-bold text-gray-900">{exp.company}:</h3>
                  <p className="mb-2 break-words font-bold text-gray-800">
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
