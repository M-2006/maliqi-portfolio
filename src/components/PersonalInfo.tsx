
import { MapPin, GraduationCap, BookOpen, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Portfolio_Pic from '../Assets/Portfolio_Pic.jpeg';

const profileDetails = [
  {
    label: 'Location',
    value: 'Kosovo',
    Icon: MapPin,
  },
  {
    label: 'Education',
    value: 'BSc Computer Science & Engineering, UBT College',
    Icon: GraduationCap,
  },
  {
    label: 'IT Background',
    value: 'IT Specialization, IAAP "Pjetër Bogdani"',
    Icon: BookOpen,
  },
  {
    label: 'Professional Focus',
    value: 'Web Development, Software Engineering & Quality Assurance',
    Icon: Code2,
  },
];

export function PersonalInfo() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const headingClass = isDark ? 'text-white' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const labelClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const iconClass = isDark ? 'text-blue-400' : 'text-blue-600';

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mb-16 scroll-mt-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">

        {/* Profile Image */}
        <figure className="mx-auto w-full max-w-sm">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={Portfolio_Pic}
              alt="Portrait of Muhamet Maliqi"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              loading="lazy"
              decoding="async"
            />

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent ${
                isDark ? 'opacity-60' : 'opacity-30'
              }`}
            />
          </div>
        </figure>

        {/* Personal Information */}
        <div>
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${iconClass}`}>
            About Me
          </p>

          <h2
            id="about-title"
            className={`mb-5 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`}
          >
            Muhamet Maliqi
          </h2>

          <p className={`mb-8 text-base leading-7 ${textClass}`}>
            I'm a Computer Science & Engineering student with a practical
            background in IT, web development, and quality assurance.
            I enjoy building responsive web applications, solving technical
            challenges, and continuously improving digital experiences.
          </p>

          {/* Profile Details */}
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {profileDetails.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isDark ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-5 w-5 ${iconClass}`}
                  />
                </div>

                <div className="min-w-0">
                  <dt className={`mb-1 text-sm font-medium ${labelClass}`}>
                    {label}
                  </dt>

                  <dd className={`text-sm leading-6 ${textClass}`}>
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
