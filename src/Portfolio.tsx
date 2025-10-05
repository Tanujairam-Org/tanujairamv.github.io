import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/NavBar";
import Background from "./Components/bg";
import Footer from "./Components/Footer";
import SkillChip from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Cursor from "./Components/Cursor";
import Intro from "./Components/Intro";
import NowPlaying from "./Components/NowPlaying";
import Hero from "./Sections/Hero";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Certificates from "./Sections/Certificates";
import ShinyText from "./Components/gradient";
import Contact from "./Sections/Contact";
import Noise from "./Components/Noise";
import "./Styles.css";

// Error Boundary for production safety
function withErrorBoundary(Component: React.ComponentType) {
  return class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null as any };

    static getDerivedStateFromError(error: any) {
      return { hasError: true, error };
    }

    componentDidCatch() {}

    render() {
      if (this.state.hasError) {
        return (
          <div style={{ color: "red", background: "#181824", padding: 24, borderRadius: 12 }}>
            <h2>Something went wrong rendering this section.</h2>
            <pre style={{ fontSize: 14 }}>{String(this.state.error)}</pre>
          </div>
        );
      }
      return <Component {...this.props} />;
    }
  };
}

const sectionHeading = (text: string, icon?: React.ReactNode) => (
  <div className="flex items-center gap-2 mb-6">
    {icon}
    <ShinyText speed={5} className="text-4xl font-bold font-manrope">
      {text}
    </ShinyText>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-manrope">
        {/* Intro, particles, cursor, and navigation */}
        <Intro />
        <Background showParticles={true} particleCount={30} />
        <Cursor />
        <Navbar />
        <Noise patternAlpha={8} />

        <main className="relative z-10 w-full max-w-7xl mx-auto pt-24 pb-16 px-4 md:px-8 flex flex-col gap-14">
          <Hero />

          {/* Now Playing */}
          <div className="flex justify-center mb-12">
            <NowPlaying />
          </div>

          {/* Skills */}
          <section id="skills" className="mb-20">
            {sectionHeading("Skills")}
            <SkillChip />
          </section>

          {/* Experience */}
          <section id="experience" className="mb-20">
            {sectionHeading("Experience")}
            <Experience />
          </section>

          {/* Education */}
          <section id="education" className="mb-20">
            {sectionHeading("Education")}
            <Education />
          </section>

          {/* Certificates */}
          <section id="certificates" className="mb-20">
            {sectionHeading("Certificates")}
            <Certificates />
          </section>

          {/* Projects */}
          <section id="projects" className="mb-20">
            {sectionHeading("Projects")}
            <Projects />
          </section>

          {/* Contact */}
          <section id="contact" className="mb-10">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default withErrorBoundary(Portfolio);
