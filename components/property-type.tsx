'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

export default function PropertyType() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const specs = [
    { label: 'Luas Tanah', value: '30 m²', icon: '📐' },
    { label: 'Luas Bangunan', value: '60 m²', icon: '🏠' },
    { label: 'Kamar Tidur', value: '2 Kamar', icon: '🛏️' },
    { label: 'Kamar Mandi', value: '1-2 Kamar', icon: '🚿' },
    { label: 'Dapur', value: 'Modern Minimalis', icon: '🍳' },
    { label: 'Ruang Tamu', value: 'Luas & Nyaman', icon: '🪑' },
  ]

  const features = [
    'Desain Minimalis Modern',
    'Tahan Gempa',
    'Ventilasi Udara Baik',
    'Pencahayaan Natural Maksimal',
    'Akses Mudah ke Halaman',
    'Konstruksi Berkualitas',
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            🏡 Tipe Unggulan
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Rumah Tipe 30/60
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hunian minimalis modern dengan design yang efisien dan fungsional untuk keluarga Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-96 md:h-[500px] bg-gray-200 shadow-2xl group">
              <img
                src={images[currentImage]}
                alt="Rumah Tipe 30/60"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all hover:scale-110 z-10 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all hover:scale-110 z-10 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentImage + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden transition-all transform hover:scale-110 ${
                    currentImage === idx ? 'ring-4 shadow-lg' : 'ring-1 ring-gray-200'
                  }`}
                  style={{
                    borderColor: currentImage === idx ? 'var(--property-green)' : 'transparent',
                  }}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  {currentImage === idx && (
                    <div className="absolute inset-0 bg-white/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <span
                className="inline-block text-sm font-bold px-4 py-2 rounded-full mb-4 transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--property-yellow)',
                  color: 'var(--property-green)',
                }}
              >
                ✨ PILIHAN POPULER
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Hunian Minimalis Modern
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desain yang rapi dan fungsional dengan pemanfaatan ruang maksimal. Cocok untuk keluarga muda yang menginginkan kenyamanan dengan efisiensi.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 border border-green-100 hover:shadow-lg transition-all hover:border-green-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{spec.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{spec.label}</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{spec.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Fitur & Keunggulan</h4>
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all group-hover:scale-125" style={{ backgroundColor: 'var(--property-yellow)' }}>
                      <Check size={16} className="text-gray-900 font-bold" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
              <p className="text-sm text-gray-600 mb-2">Harga Mulai Dari</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold" style={{ color: 'var(--property-green)' }}>Rp 185 Juta</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Cicilan Rp 1.2 Juta Flat hingga Lunas</p>
              <button
                onClick={() => window.location.href = 'https://wa.me/087875483400?text=Saya%20tertarik%20dengan%20tipe%20rumah%2030%2F60'}
                className="w-full px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--property-green)' }}
              >
                Pesan Sekarang
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
