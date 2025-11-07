import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9Xr7r2cFQM2Icl9e/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 py-20">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            Portofolio Pribadi
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Halo, saya <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Nama Anda</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Seorang pengembang web yang fokus pada pengalaman pengguna, performa, dan estetika. Saya suka membangun produk yang berdampak.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700">
              Lihat Proyek
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-800 font-medium hover:bg-gray-50">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
