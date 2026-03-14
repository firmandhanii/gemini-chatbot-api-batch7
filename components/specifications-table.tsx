'use client'

import { CheckCircle2, Award, Zap } from 'lucide-react'

export default function SpecificationsTable() {
  const specs = [
    {
      category: 'Pondasi & Struktur',
      icon: '🏗️',
      items: [
        { label: 'Pondasi', value: 'Batu Kali', status: '✓' },
        { label: 'Rangka Atap', value: 'Baja Ringan', status: '✓' },
      ],
    },
    {
      category: 'Dinding & Plafond',
      icon: '🏠',
      items: [
        { label: 'Dinding', value: 'Double Dinding Hebel Plester Finishing Cat', status: '✓' },
        { label: 'Rangka Plafond', value: 'Hollow', status: '✓' },
        { label: 'Plafond', value: 'GRC Finishing Cat', status: '✓' },
      ],
    },
    {
      category: 'Lantai & Atap',
      icon: '✨',
      items: [
        { label: 'Lantai', value: 'Ceramic Tile 40x40', status: '✓' },
        { label: 'Penutup Atap', value: 'Genteng Beton Flat', status: '✓' },
      ],
    },
    {
      category: 'Kusen, Pintu & Jendela',
      icon: '🪟',
      items: [
        { label: 'Kusen & Pintu', value: 'UPVC', status: '✓' },
        { label: 'Pintu Kamar Mandi', value: 'PVC', status: '✓' },
        { label: 'Jendela', value: 'Kaca Polos', status: '✓' },
      ],
    },
    {
      category: 'Sanitasi & Kitchen',
      icon: '🚿',
      items: [
        { label: 'Sanitair', value: 'Kloset Duduk + Shower', status: '✓' },
        { label: 'Kitchen', value: 'Meja Dapur + Kitchen Sink', status: '✓' },
      ],
    },
    {
      category: 'Utilitas & Instalasi',
      icon: '⚡',
      items: [
        { label: 'Air', value: 'Sumur Pantek + Semi Jet Pump', status: '✓' },
        { label: 'Listrik', value: '1300 VA', status: '✓' },
        { label: 'Septic Tank', value: 'Biotech', status: '✓' },
        { label: 'Taman', value: 'Pohon Buah', status: '✓' },
      ],
    },
  ]

  const qualityHighlights = [
    { icon: '⭐', title: 'Material Premium', desc: 'Dari supplier terpercaya dan bersertifikat' },
    { icon: '🛡️', title: 'Konstruksi Kuat', desc: 'Tahan gempa dan cuaca ekstrem' },
    { icon: '🔧', title: 'Teknologi Modern', desc: 'Sistem drainase dan sanitasi terbaik' },
    { icon: '📋', title: 'Garansi 1 Tahun', desc: 'Garansi struktur bangunan penuh' },
  ]

  return (
    <section id="specs" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award size={24} style={{ color: 'var(--property-green)' }} />
            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--property-green)' }}>
              🏗️ Spesifikasi Detail
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spesifikasi Bangunan Berkualitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detail lengkap material dan sistem bangunan terbaik untuk memastikan kualitas hunian Anda
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-green-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300"></div>

              {/* Header withicon and title */}
              <div className="relative z-10 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{spec.icon}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: 'var(--property-yellow)' }}>
                    Premium
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 pb-4 border-b-2"
                  style={{ borderColor: 'var(--property-green)' }}
                >
                  {spec.category}
                </h3>
              </div>

              {/* Items */}
              <div className="relative z-10 space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex items-start justify-between p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-900 font-semibold mt-1">{item.value}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <CheckCircle2 size={20} className="text-green-500 group-hover/item:scale-110 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Highlights */}
        <div className="bg-gradient-to-r from-green-50 via-blue-50 to-green-50 rounded-3xl p-12 border border-green-100 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Zap size={28} style={{ color: 'var(--property-green)' }} />
            <h3 className="text-3xl font-bold text-gray-900">Keunggulan Kualitas Kami</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityHighlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Ingin Mengetahui Lebih Detail?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Tim kami siap memberikan penjelasan lengkap tentang spesifikasi dan kualitas bangunan Dutaland Residence
          </p>
          <button
            onClick={() => window.location.href = 'https://wa.me/+6287875483400?text=Saya%20ingin%20penjelasan%20detail%20tentang%20spesifikasi%20bangunan%20Dutaland%20Residence'}
            className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            style={{ backgroundColor: 'var(--property-yellow)', color: 'var(--property-green)' }}
          >
            Hubungi Kami Sekarang
            <span>→</span>
          </button>
        </div>

        {/* Warranty Assurance */}
        <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200 text-center">
          <p className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: 'var(--property-green)' }}>
            ✓ JAMINAN KUALITAS
          </p>
          <p className="text-lg text-gray-900 font-semibold">
            Garansi Struktur Bangunan 1 Tahun + Layanan After-Sales Terbaik
          </p>
        </div>
      </div>
    </section>
  )
}
