import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda sudah terkirim (simulasi).');
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kontak</h2>
          <p className="mt-3 text-gray-700">Ingin bekerja sama atau sekadar say hello? Kirim pesan Anda.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <input required placeholder="Nama" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Subjek" className="sm:col-span-2 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea required placeholder="Pesan" rows={5} className="sm:col-span-2 w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="inline-flex items-center gap-2 w-fit rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700">
                <Send size={18} />
                Kirim
              </button>
              {status && <p className="sm:col-span-2 text-sm text-green-700">{status}</p>}
            </form>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} />
              <a className="hover:underline" href="mailto:email@contoh.com">email@contoh.com</a>
            </div>
            <p className="mt-4 text-sm text-gray-600">Saya biasanya merespons dalam 1-2 hari kerja.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
