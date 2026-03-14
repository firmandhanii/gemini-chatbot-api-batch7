'use client'

import { useState } from 'react'
import { X, Expand, Camera } from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891',
      title: 'Taman Bermain',
      category: 'Fasilitas',
      description: 'Taman bermain yang aman dan nyaman dengan berbagai permainan untuk anak-anak Dutaland'
    },
    {
      src: 'https://images.unsplash.com/photo-1561487281-d59fee0ab84f',
      title: 'Keamanan 24 Jam',
      category: 'Keamanan',
      description: 'Sistem keamanan modern dengan CCTV dan petugas profesional menjaga 24 jam non-stop'
    },
    {
      src: 'https://images.unsplash.com/photo-1565008576549-bdde6e1a3543',
      title: 'Jalan Perumahan Rapi',
      category: 'Infrastruktur',
      description: 'Jalan perumahan yang rapi, halus, dan lebar dengan drainase optimal untuk kenyamanan'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: 'Suasana Asri',
      category: 'Lingkungan',
      description: 'Lingkungan asri penuh penghijauan dengan taman dan pohon-pohon indah di setiap sudut'
    },
    {
      src: 'https://images.unsplash.com/photo-1571508601166-72f91dca6030',
      title: 'Gerbang Utama',
      category: 'Akses',
      description: 'Gerbang utama yang megah dengan sistem akses masuk modern dan terkontrol'
    },
    {
      src: 'https://images.unsplash.com/photo-1553531088-189a29cf9584',
      title: 'Kantor Pemasaran',
      category: 'Layanan',
      description: 'Kantor pemasaran profesional siap membantu konsultasi lengkap untuk investasi properti Anda'
    },
  ]

  return (
    <section id="gallery" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Camera size={24} style={{ color: 'var(--property-green)' }} />
            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--property-green)' }}>
              Dokumentasi
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galeri Fasilitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat keindahan, lengkapnya fasilitas, dan kualitas konstruksi Dutaland Residence
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer h-80 border border-gray-100"
              onClick={() => {
                setSelectedImage(image.src)
                setSelectedIndex(index)
              }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Category Badge */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: 'var(--property-yellow)' }}>
                    {image.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">{image.description}</p>

                {/* Expand Icon */}
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <Expand size={16} />
                  <span className="text-xs font-semibold">Klik untuk melihat lebih besar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">{selectedIndex + 1} / {images.length}</p>
                  <h3 className="text-white text-2xl font-bold">{images[selectedIndex]?.title}</h3>
                </div>
              </div>

              {/* Image */}
              <img
                src={selectedImage}
                alt="Fullscreen"
                className="w-full h-auto rounded-xl shadow-2xl"
              />

              {/* Description */}
              <p className="text-white/80 mt-4 text-center">{images[selectedIndex]?.description}</p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={32} />
              </button>

              {/* Navigation Info */}
              <div className="text-white/50 text-center mt-6 text-sm">
                Tekan ESC atau klik di luar untuk menutup
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ingin melihat galeri lengkap dan berkunjung langsung ke lokasi?
          </p>
          <button
            onClick={() => window.location.href = 'https://wa.me/+6287875483400?text=Saya%20ingin%20mendapatkan%20galeri%20lengkap%20dan%20jadwal%20kunjungan%20ke%20Dutaland%20Residence'}
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            style={{ backgroundColor: 'var(--property-green)' }}
          >
            Minta Jadwal Kunjungan
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
