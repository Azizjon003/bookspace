import { useState, useEffect } from "react";
import {
  Book,
  Users,
  FileText,
  Award,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#001F3F] text-[#EAD8B1] p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bookspace</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "Library", "Stories", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-[#FF9F1C] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X color="#EAD8B1" /> : <Menu color="#EAD8B1" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {["Home", "Library", "Stories", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-[#FF9F1C] hover:text-[#001F3F] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBookCount((prevCount) =>
        prevCount < 10000 ? prevCount + 100 : prevCount
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#001F3F] to-[#2C7873] text-[#EAD8B1] py-32 pt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6 animate-fade-in-down">
          Welcome to Bookspace
        </h2>
        <p className="text-2xl mb-8 animate-fade-in-up">
          Discover, Read, and Create Stories
        </p>
        <button className="bg-[#FF9F1C] text-[#001F3F] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#F7B267] transition duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
        <p className="mt-12 text-xl">
          Join our community of{" "}
          <span className="font-bold text-3xl text-[#FF9F1C]">
            {bookCount.toLocaleString()}+
          </span>{" "}
          books
        </p>
      </div>
    </section>
  );
};

const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-[#2C7873] rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
    <div className="bg-gradient-to-r from-[#001F3F] to-[#2C7873] p-6">
      <Icon className="w-12 h-12 text-[#FF9F1C] mx-auto" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-[#EAD8B1]">{title}</h3>
      <p className="text-[#A5D8DD]">{description}</p>
    </div>
  </div>
);

const Features = () => (
  <section className="py-24 bg-[#1A535C]">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#EAD8B1]">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature
          icon={Book}
          title="E-books Library"
          description="Access a vast collection of digital books tailored for students."
        />
        <Feature
          icon={Users}
          title="Interactive Reading"
          description="Highlight, take notes, and discuss with other readers."
        />
        <Feature
          icon={FileText}
          title="Quotes & Stories"
          description="Get inspired and write your own stories based on your favorite quotes."
        />
        <Feature
          icon={Award}
          title="Rewards & Competitions"
          description="Earn points, participate in quizzes, and compete with others."
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ name, role, content }) => (
  <div className="bg-[#2C7873] rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-xl">
    <p className="text-[#A5D8DD] mb-4 italic">"{content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-r from-[#001F3F] to-[#FF9F1C] rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold text-[#EAD8B1]">{name}</h4>
        <p className="text-[#A5D8DD]">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-[#EAD8B1]">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#001F3F]">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial
          name="Alex Johnson"
          role="Student"
          content="Bookspace has revolutionized the way I read and learn. The interactive features make studying so much more engaging!"
        />
        <Testimonial
          name="Sarah Lee"
          role="Teacher"
          content="As an educator, I find Bookspace to be an invaluable tool for encouraging reading and writing among my students."
        />
        <Testimonial
          name="Mike Brown"
          role="Parent"
          content="My kids love using Bookspace. It's made reading fun for them, and I can easily track their progress."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#001F3F] text-[#EAD8B1] py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About Us", "Contact", "Privacy Policy"].map((item) => (
              <li key={item} className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-[#FF9F1C]" />
                <a
                  href="#"
                  className="hover:text-[#FF9F1C] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] bg-[#1A535C] text-[#EAD8B1]"
            />
            <button
              type="submit"
              className="bg-[#FF9F1C] text-[#001F3F] px-4 py-2 rounded-r-md hover:bg-[#F7B267] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-[#EAD8B1] border-opacity-20">
        <p>&copy; 2024 Bookspace. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const BookspaceWebsite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default BookspaceWebsite;
