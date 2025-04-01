import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="bg-white px-6 py-4 shadow flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">AltP3</span>
        </Link>
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li><Link href="#">About Us</Link></li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer">Courses</span>
            <ul className="absolute z-50 mt-2 w-max min-w-[350px] bg-white/90 backdrop-blur shadow-md rounded-lg py-2 invisible group-hover:visible group-hover:block transition duration-200">
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pmp">Project Management Professional (PMP)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pmi-acp">PMI Agile Certified Practitioner (PMI-ACP)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pmi-rmp">PMI Risk Management Professional (PMI-RMP)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pmi-capm">Certified Associate in Project Management (PMI-CAPM)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pgmp">Program Management Professional (PMI-PgMP)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/pfmp">Portfolio Management Professional (PMI-PfMP)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/dasm">Disciplined Agile Scrum Master (PMI-DASM)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/dassm">Disciplined Agile Senior Scrum Master (PMI-DASSM)</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/courses/dac">Disciplined Agile Coach (PMI-DAC)</Link></li>
            </ul>
          </li>

          <li><Link href="#">Mocks</Link></li>
          <li><Link href="#">Blogs & Videos</Link></li>
          <li><Link href="#">Testimonials</Link></li>
        </ul>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login / Sign Up
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to AltP3.com</h1>
        <p className="mt-2 text-lg text-gray-600">Your trusted partner for project management excellence.</p>
        <Link href="/register">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Register Now</button>
        </Link>
      </section>

      {/* Why AltP3 */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-center text-3xl font-semibold mb-12">Why AltP3?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold">Proven Trainers</h3>
            <p>Industry experts with 10+ years of training experience and top certifications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">High Success Rate</h3>
            <p>Over 98% pass rate with structured courses and proven strategies.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Real-World Projects</h3>
            <p>Case studies and mock tests based on real project challenges.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>
          Contact us at <a href="mailto:arun@altp3.com" className="underline">arun@altp3.com</a>
        </p>
        <p className="flex justify-center items-center gap-2 mt-2">
          <FaWhatsapp className="inline-block text-green-500 text-xl" />
          +91 78630 78689
        </p>
        <p className="mt-2">© 2025 AltP3. All rights reserved.</p>
      </footer>
    </main>
  );
}