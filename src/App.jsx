import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Nama Anda. Semua hak dilindungi.
          </p>
          <p className="text-gray-500">Dibangun dengan React, Tailwind, dan rasa bangga.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
