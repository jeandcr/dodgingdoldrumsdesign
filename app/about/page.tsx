import Slideshow from "@/components/slideshow";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full text-lg sm:text-md">
      {/* about section */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        <div className="bg-white flex flex-col gap-4 justify-center p-8 md:p-16">
          <h1 className="text-4xl font-bold">About me</h1>
          <p>
            My name is Hans Niels-Christiansen and I have started Dodging
            Doldrums Design as an independent engineering consultancy,
            specializing in mechanical design and dimensioning, based in
            Copenhagen Denmark.
          </p>
          <p>
            I have a master’s degree in mechanical engineering with 7 years of
            experience in the field. This includes designing and optimizing
            machine elements for companies such as MAN Energy Solutions, Krüger
            and Stratasys.
          </p>
          <p>
            See my full background on{" "}
            <Link
              href="https://www.linkedin.com/in/hans-n-c-dk/"
              className="inline-flex gap-1 items-baseline"
              target="_blank"
            >
              LinkedIn <ExternalLink size="16" />
            </Link>
            .
          </p>
        </div>
        <div className="relative bg-gray-50 sm:min-h-[500px]">
          <Image
            src="/hans.avif"
            alt="Hans sitting at his desk working"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      {/* Laura section */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        <div className="relative bg-gray-50 sm:min-h-[500px] order-last md:order-first">
          <Image
            src="/laura.avif"
            alt="Hans sitting at his desk working"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-white flex flex-col gap-4 justify-center p-8 md:p-16">
          <h2 className="text-3xl font-bold">Laura</h2>
          <p>
            I have always liked using my hands and experiment with versatile
            craftmanship. In 2008, I started constructing my own sailboat and
            continued throughout both fulltime studies and jobs.
          </p>
          <p>
            The joy and pride when Laura was launched in 2020, ignited my
            motivation to go independent. In 2023, I decided to take the dive.
          </p>
          <p>
            See the journey of the project on{" "}
            <Link
              href="https://www.instagram.com/fralandtilvand/"
              className="inline-flex gap-1 items-baseline"
              target="_blank"
            >
              Instagram
              <ExternalLink size="16" />
            </Link>
            .
          </p>
        </div>
      </section>

      {/* slideshow section */}
      <section className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left Column - Text */}
        <div className="bg-white flex flex-col gap-4 items-start justify-center p-8 md:p-16">
          <h2 className="text-3xl font-bold">
            Determined athlete with great people skills
          </h2>
          <p>
            I have always enjoyed setting ambitious goals and experience a
            progress. Besides building a sailboat, this has also been a crucial
            part of my achievements in high level sports. Both as part of the
            Danish national team in American football and later as an individual
            in martial arts.
          </p>
          <p>
            My social skills are first and foremost rooted in my outgoing nature
            and wellbeing in other people’s company. Practicing team sports and
            living in a dorm with different personalities, has only provided me
            with additional dimensions to navigate in diverse groups and
            collaborate with cross-functional profiles.
          </p>
        </div>
        <div className="bg-gray-50 h-full p-8 md:p-16 flex items-center">
          <div className="w-full h-[500px]">
            <Slideshow />
          </div>
        </div>
      </section>
    </div>
  );
}
