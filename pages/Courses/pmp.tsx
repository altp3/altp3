import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">AltP3</span>
        </Link>
        <ul className="flex space-x-8 items-center text-gray-700">
          <li>
            <Link href="#about">About Us</Link>
          </li>

          {/* Courses Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <span className="cursor-pointer">Courses</span>
            <div className="absolute left-0 mt-2 z-50">
              {showCourses && (
                <ul className="w-[400px] backdrop-blur-md bg-white/80 border shadow-lg p-4 space-y-2">
                  <li><Link href="/courses/pmp">Project Management Professional (PMP)</Link></li>
                  <li><Link href="/courses/pmi-acp">PMI Agile Certified Practitioner (PMI-ACP)</Link></li>
                  <li><Link href="/courses/pmi-rmp">PMI Risk Management Professional (PMI-RMP)</Link></li>
                  <li><Link href="/courses/pmi-capm">Certified Associate in Project Management (PMI-CAPM)</Link></li>
                  <li><Link href="/courses/pmi-pgmp">Program Management Professional (PMI-PgMP)</Link></li>
                  <li><Link href="/courses/pmi-pfmp">Portfolio Management Professional (PMI-PfMP)</Link></li>
                  <li><Link href="/courses/pmi-dasm">Disciplined Agile Scrum Master (PMI-DASM)</Link></li>
                  <li><Link href="/courses/pmi-dassm">Disciplined Agile Senior Scrum Master (PMI-DASSM)</Link></li>
                  <li><Link href="/courses/pmi-dac">Disciplined Agile Coach (PMI-DAC)</Link></li>
                </ul>
              )}
            </div>
          </li>

          <li><Link href="#mocks">Mocks</Link></li>
          <li><Link href="#blogs">Blogs & Videos</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login / Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold">Welcome to AltP3.com</h1>
        <p className="mt-4 text-lg text-gray-600">Your trusted partner for project management excellence.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Register Now
        </button>
      </section>

      {/* Why AltP3 */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Why AltP3?</h2>
        <div className="flex justify-center space-x-12 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">Proven Trainers</h3>
            <p className="text-gray-600">Industry experts with 10+ years of experience and top certifications.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">High Success Rate</h3>
            <p className="text-gray-600">Over 98% pass rate with structured courses and proven strategies.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Real-World Projects</h3>
            <p className="text-gray-600">Case studies and mock tests based on real project challenges.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>Contact us at <a href="mailto:support@altp3.com" className="underline">support@altp3.com</a></p>
        <p className="mt-2">© 2025 AltP3. All rights reserved.</p>
      </footer>
    </div>
  );
}