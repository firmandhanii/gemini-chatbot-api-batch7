'use client'

import { Phone, MapPin, CheckCircle2 } from 'lucide-react'

export default function CTASection() {
  const stats = [
    { value: '100+', label: 'Unit Terjual', icon: '🏠' },
    { value: '98%', label: 'Kepuasan Pelanggan', icon: '⭐' },
    { value: '5+', label: 'Tahun Pengalaman', icon: '🎯' },
  ]

  return (
    <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--property-green)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Jangan Lewatkan Kesempatan Emas Ini!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hanya tersisa 50 unit dengan harga spesial. Pesan sekarang dan dapatkan penawaran eksklusif untuk pembeli pertama.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => window.location.href = 'https://wa.me/+6287875483400?text=Saya%20ingin%20survey%20lokasi%20Dutaland%20Residence'}
            className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 group"
            style={{ backgroundColor: 'var(--property-yellow)', color: 'var(--property-green)' }}
          >
            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
            Hubungi untuk Survey
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('features')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-all hover:shadow-2xl hover:scale-105"
          >
            Lihat Keunggulan Kami
          </button>
        </div>

        {/* Benefits Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center hover:bg-white/20 transition-all">
            <CheckCircle2 size={24} className="mx-auto mb-2 text-yellow-300" />
            <p className="font-semibold">Proses Cepat & Mudah</p>
            <p className="text-sm text-white/80">Bisa langsung huni setelah akad</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center hover:bg-white/20 transition-all">
            <CheckCircle2 size={24} className="mx-auto mb-2 text-yellow-300" />
            <p className="font-semibold">Cicilan Terjangkau</p>
            <p className="text-sm text-white/80">Cicilan Rp 1.2 Juta/bulan Flat hingga Lunas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center hover:bg-white/20 transition-all">
            <CheckCircle2 size={24} className="mx-auto mb-2 text-yellow-300" />
            <p className="font-semibold">Bebas Biaya Admin</p>
            <p className="text-sm text-white/80">Tanpa biaya tersembunyi</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-5xl mb-2 transform group-hover:scale-125 transition-transform">{stat.icon}</div>
              <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/80 group-hover:text-white transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/90 mb-4 flex items-center justify-center gap-2">
            <MapPin size={20} />
            Kunjungi lokasi kami hari ini dan rasakan pengalaman hunian impian Anda
          </p>
          <a
            href="https://wa.me/+6287875483400?text=Saya%20ingin%20tahu%20alamat%20lokasi%20Dutaland%20Residence"
            className="text-yellow-300 hover:text-yellow-200 font-bold underline transition-colors"
          >
            Dapatkan petunjuk arah →
          </a>
        </div>
      </div>
    </section>
  )
}
