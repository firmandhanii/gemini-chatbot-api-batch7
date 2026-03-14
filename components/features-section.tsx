'use client'

import { Zap, Shield, Home, TrendingUp, Users, Award } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Home,
      title: 'Fasilitas Lengkap',
      description: 'Taman bermain anak, kolam renang Olympic, lapangan olahraga, area gym, dan taman hijau yang luas untuk menghemat waktu berkualitas bersama keluarga.',
      number: '01',
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan 24 jam dengan CCTV, gerbang masuk modern, satpam profesional, dan pagar tertutup untuk ketenangan pikiran Anda.',
      number: '02',
    },
    {
      icon: Zap,
      title: 'Spesifikasi Berkualitas',
      description: 'Bangunan tahan gempa, sistem drainase optimal, listrik stabil dengan kabel terendam, dan akses jalan yang lebar dan kokoh.',
      number: '03',
    },
    {
      icon: TrendingUp,
      title: 'Investasi Menguntungkan',
      description: 'Lokasi strategis di area berkembang dengan potensi apresiasi nilai properti tinggi. Cocok untuk hunian sekaligus aset investasi jangka panjang.',
      number: '04',
    },
    {
      icon: Users,
      title: 'Komunitas Solid',
      description: 'Lingkungan yang aman dan ramah dengan kegiatan komunitas rutin, pengajian, olahraga, dan acara kebersamaan lainnya.',
      number: '05',
    },
    {
      icon: Award,
      title: 'Proses Mudah & Cepat',
      description: 'Proses approval cepat (3-5 hari kerja), cicilan ringan, berbagai pilihan bank mitra, dan tim profesional siap membantu.',
      number: '06',
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
              ✨ Keunggulan Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kenapa Memilih Dutaland Residence?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen menghadirkan hunian berkualitas tinggi dengan harga terjangkau, 
              lokasi strategis, dan fasilitas lengkap untuk kenyamanan keluarga Anda.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
                
                {/* Number badge */}
                <div className="absolute top-4 right-6 text-5xl font-bold text-green-100 group-hover:text-green-200 transition-colors">
                  {feature.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: 'var(--property-green)' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:" style={{ color: 'var(--property-green)' }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--property-yellow)' }}
                ></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Tertarik dengan penawaran kami? Hubungi tim kami sekarang juga!
          </p>
          <button
            onClick={() => window.location.href = 'https://wa.me/+6287875483400?text=Saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20Dutaland%20Residence'}
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            style={{ backgroundColor: 'var(--property-green)' }}
          >
            Hubungi Kami Sekarang
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
