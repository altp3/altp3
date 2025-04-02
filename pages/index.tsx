import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AltP3</title>
        <meta name="description" content="PMI Certifications and Mock Tests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">AltP3</span>
            </Link>
            <div className="space-x-8 text-lg">
              <Link href="/about"><span className="hover:text-blue-600">About Us</span></Link>
              <div className="group inline-block relative">
                <span className="hover:text-blue-600 cursor-pointer">Courses</span>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded w-max min-w-[300px] z-50">
                  <li><Link href="/courses/pmp" className="block px-4 py-2 hover:bg-gray-100">Project Management Professional (PMP)</Link></li>
                  <li><Link href="/courses/pmi-acp" className="block px-4 py-2 hover:bg-gray-100">PMI Agile Certified Practitioner (PMI-ACP)</Link></li>
                  <li><Link href="/courses/pmi-rmp" className="block px-4 py-2 hover:bg-gray-100">PMI Risk Management Professional (PMI-RMP)</Link></li>
                  <li><Link href="/courses/capm" className="block px-4 py-2 hover:bg-gray-100">Certified Associate in Project Management (PMI-CAPM)</Link></li>
                  <li><Link href="/courses/pgmp" className="block px-4 py-2 hover:bg-gray-100">Program Management Professional (PgMP)</Link></li>
                  <li><Link href="/courses/pfmp" className="block px-4 py-2 hover:bg-gray-100">Portfolio Management Professional (PfMP)</Link></li>
                  <li><Link href="/courses/dasm" className="block px-4 py-2 hover:bg-gray-100">Disciplined Agile Scrum Master (DASM)</Link></li>
                  <li><Link href="/courses/dassm" className="block px-4 py-2 hover:bg-gray-100">Disciplined Agile Senior Scrum Master (DASSM)</Link></li>
                  <li><Link href="/courses/dac" className="block px-4 py-2 hover:bg-gray-100">Disciplined Agile Coach (DAC)</Link></li>
                </ul>
              </div>
              <Link href="/mocks"><span className="hover:text-blue-600">Mocks</span></Link>
              <Link href="/blogs"><span className="hover:text-blue-600">Blogs & Videos</span></Link>
              <Link href="/testimonials"><span className="hover:text-blue-600">Testimonials</span></Link>
              <Link href="/refer"><span className="hover:text-blue-600">Refer a Friend</span></Link>
              <Link href="/login" className="ml-4 text-blue-600 font-semibold">Login / Sign Up</Link>
            </div>
          </div>
        </nav>

        <section className="text-center py-20 px-4 bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to AltP3</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">Your ultimate destination for mastering PMI certifications with confidence and community.</p>
          <Link href="/register" className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800">Register Now</Link>
        </section>

        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
          <p>Contact us at <a href="mailto:arun@altp3.com" className="text-blue-600">arun@altp3.com</a> | <a href="tel:+917863078689" className="text-blue-600">+91 78630 78689</a> 📱</p>
        </footer>
      </main>
    </div>
  );
}