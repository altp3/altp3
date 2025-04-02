// File: pages/about/story.tsx

import Link from 'next/link';

export default function Story() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">The Story of AltP3</h1>

      <p className="text-lg mb-4">
        Project management is evolving, but traditional learning methods haven’t caught up. Too often, professionals struggle to bridge the gap between theory and real-world execution. That’s why we created AltP3—a groundbreaking approach to mastering the PMI framework for portfolios, programs, and projects.
      </p>

      <p className="text-lg mb-4">
        At AltP3, we believe learning should be <strong>practical, engaging, and experience-driven</strong>. We use <strong>Case Studies, Mind Maps, Flash Cards</strong>, and other tools to bring concepts to life. More importantly, we focus on the real-world challenges of Organizational Project Management, ensuring that what you learn can be immediately applied.
      </p>

      <p className="text-lg mb-4">
        <strong>
          <Link href="https://www.linkedin.com/in/arunprakashsharma/" target="_blank">
            Arun Prakash Sharma
          </Link>
        </strong>
        , a seasoned trainer and expert in project management, has experienced both triumphs and failures throughout his journey. These failures weren’t setbacks—they were lessons. At AltP3, we embrace this philosophy: <strong>learning from real-world mistakes is the key to mastering project management</strong>.
      </p>

      <p className="text-lg mb-4">
        We built AltP3 to <strong>solve a critical problem</strong>—the gap between theory and practice. Our mission is to create project managers who don’t just understand PMI principles but know how to implement them <strong>with confidence and impact</strong>.
      </p>

      <p className="text-lg mb-6 font-semibold text-center">
        <strong>Join us in transforming project management—learn smarter, apply better, and lead with excellence!</strong>
      </p>

      <div className="text-center">
        <Link href="/register">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}