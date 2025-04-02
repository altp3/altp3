import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to AltP3</title>
      </Head>

      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold hover:text-blue-600">AltP3</a>

              {/* About Us */}
              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-600">About Us</span>
                <ul className="absolute hidden group-hover:block bg-white border shadow mt-2 rounded-md min-w-max z-50">
                  <li>
                    <a href="/about/story" className="block px-4 py-2 hover:bg-gray-100">
                      Our Story
                    </a>
                  </li>
                </ul>
              </div>

              {/* Courses */}
              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-600">Courses</span>
                <ul className="absolute hidden group-hover:block bg-white border shadow mt-2 rounded-md min-w-max z-50 whitespace-nowrap">
                  <li><a href="/Courses/pmp" className="block px-4 py-2 hover:bg-gray-100">Project Management Professional (PMP)</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - ACP</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - RMP</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - CAPM</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - PgMP</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - PfMP</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - DASM</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - DASSM</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">PMI - DAC</a></li>
                </ul>
              </div>

              <a href="#" className="hover:text-blue-600">Mocks</a>
              <a href="#" className="hover:text-blue-600">Blogs and Videos</a>
              <a href="#" className="hover:text-blue-600">Testimonials</a>
              <a href="#" className="hover:text-blue-600">Refer a Friend</a>
            </div>

            <div>
              <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login / Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AltP3</h1>
        <p className="text-lg text-gray-600">Mastering Project Management the Smart Way</p>
        <div className="mt-6">
          <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">Register Now</a>
        </div>
      </main>
    </div>
  );
}