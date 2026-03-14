'use client'

import { MapPin, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-3000 hover:scale-105"
          style={{
            backgroundImage: 'url(/Background-blur.jpg)',
          }}
        />
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold" style={{ color: 'var(--property-green)' }}>
              🔥 PENAWARAN TERBATAS - BURUAN PESAN SEBELUM KEHABISAN!
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Hunian Modern
            <br />
            <span style={{ color: 'var(--property-yellow)' }}>Dutaland Residence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
            Wujudkan impian memiliki rumah modern dengan harga terjangkau. Lokasi strategis di area berkembang dengan fasilitas lengkap dan cicilan ringan mulai dari Rp 185 jutaan, cicilan cuma Rp 1.2 juta per bulan.
          </p>

          {/* Key Points */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <CheckCircle2 size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Cicilan Ringan</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <CheckCircle2 size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Lokasi Strategis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <CheckCircle2 size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Fasilitas Lengkap</span>
            </div>
          </div>

          {/* Promo Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-3xl">
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-bold">Harga Mulai Dari</p>
              <p className="text-3xl font-bold mt-2" style={{ color: 'var(--property-green)' }}>Rp 185 Juta</p>
              <p className="text-xs text-gray-400 mt-1">Tipe 30/60 m²</p>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-bold">Cicilan Bulanan</p>
              <p className="text-3xl font-bold mt-2" style={{ color: 'var(--property-green)' }}>Rp 1.2 Juta</p>
              <p className="text-xs text-gray-400 mt-1">Per Bulan (~20 tahun)</p>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-bold">Area</p>
              <p className="text-3xl font-bold mt-2" style={{ color: 'var(--property-green)' }}>30-60 m²</p>
              <p className="text-xs text-gray-400 mt-1">Pilihan Tipe Rumah</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('features')}
              className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
              style={{ backgroundColor: 'var(--property-green)' }}
            >
              Lihat Fasilitas
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'https://wa.me/+6287875483400?text=Saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20Dutaland%20Residence'}
              className="px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white hover:bg-white/20 transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              💬 Chat WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-xs font-semibold">Scroll ke bawah</span>
          <svg className="w-5 h-5 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
