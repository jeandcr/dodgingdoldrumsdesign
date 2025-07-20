import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center md:justify-end-safe md:pr-20">
        <Image
          src="/hero.avif"
          alt="Hans sitting at his desk working"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 text-center text-white max-w-2xl p-6 bg-black/60">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Industrial and
            <br />
            engineering design
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A Copenhagen based consultancy,
            <br />
            helping dodging technical doldrums.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 min-h-[410px]">
        {/* Left Column */}
        <div className="bg-gray-100 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              Mechanical design
              <br />
              and dimensioning
              <br />
              expertise
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-black flex items-center justify-center p-8 md:p-16">
          <div className="max-w-md">
            <ul className="space-y-6 text-white">
              <li className="flex gap-2 items-start">
                <SvgCheckMark className="w-4 h-4 fill-white self-center" />
                <span className="text-lg">Design for Excellence (DfX)</span>
              </li>
              <li className="flex gap-2 items-start">
                <SvgCheckMark className="w-4 h-4 fill-white self-center" />
                <span className="text-lg">Reliability ensuring</span>
              </li>
              <li className="flex gap-2 items-start">
                <SvgCheckMark className="w-4 h-4 fill-white self-center" />
                <span className="text-lg">
                  High quality CAD and production documentation
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <SvgCheckMark className="w-4 h-4 fill-white self-center" />
                <span className="text-lg">3D printing design optimization</span>
              </li>
              <li className="flex gap-2 items-start">
                <SvgCheckMark className="w-4 h-4 fill-white self-center" />
                <span className="text-lg">
                  Powder rheology and fluid tribology expertise
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight">
            Why choose Dodging Doldrums Design as your
            <br />
            engineering consultant?
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Besides my toolbox with a degree and several years of experience,
              I bring a detail-oriented mindset, along with strong collaboration
              and social skills, whether your demand is a specialist contributor
              or full project ownership and execution.
            </p>

            <p>
              Feel free to reach out through below contact information or read
              more about me and background in{" "}
              <Link
                href="/about"
                className="text-black underline hover:no-underline"
              >
                About
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SvgCheckMark({ ...props }) {
  return (
    <svg
      {...props}
      preserveAspectRatio="xMidYMid meet"
      data-bbox="20 20 160 160"
      viewBox="20 20 160 160"
      xmlns="http://www.w3.org/2000/svg"
      data-type="color"
      role="img"
      aria-label="Checkmark"
    >
      <g>
        <path
          d="M100 20c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm-9.761 113.896L63.124 107.6a2.001 2.001 0 0 1-.022-2.85l9.568-9.573a2 2 0 0 1 2.791-.037l14.776 14.01a2 2 0 0 0 2.808-.055l34.829-35.699a2 2 0 0 1 2.846-.018l9.547 9.547a2 2 0 0 1 .013 2.815l-47.22 48.12a2 2 0 0 1-2.821.036z"
          fill="inherit"
          data-color="1"
        ></path>
      </g>
    </svg>
  );
}
