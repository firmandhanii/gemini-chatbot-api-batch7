'use client'

export default function FacilitiesSection() {
  const facilities = [
    { name: 'Masjid Riyadurrahman', emoji: '🕌' },
    { name: 'Pasar Babelan', emoji: '🛍️' },
    { name: 'Ramayana Cibitung', emoji: '🏬' },
    { name: 'South Lake Park', emoji: '🌳' },
    { name: 'Hutan Mangrove Muara Blacan', emoji: '🌿' },
  ]

  return (
    <section id="facilities" className="w-full py-20 md:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            🚗 Akses & Lingkungan
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fasilitas & Akses Jalan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Area hunian yang nyaman dengan akses jalan lebar dan berbagai fasilitas publik di sekitar
          </p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4 text-center">
          <p className="text-gray-700 text-lg">
            Dutaland Residence didesain dengan perhatian terhadap aksesibilitas dan kenyamanan. Jalan di dalam dan di sekitar proyek dirancang lebar dan kokoh untuk memudahkan akses kendaraan.
          </p>
          <p className="text-gray-600">
            Selain itu, berbagai fasilitas publik penting seperti tempat ibadah, pasar tradisional, pusat belanja, taman rekreasi, dan alam yang asri tersedia di sekitar proyek untuk mendukung gaya hidup sehat dan nyaman keluarga Anda.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {facility.emoji}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {facility.name}
                </h3>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-green-0 group-hover:bg-green-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ backgroundColor: 'var(--property-green)' }}
              ></div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border-l-4" style={{ borderColor: 'var(--property-green)' }}>
            <div className="text-4xl mb-4">🛣️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Jalan Lebar & Kokoh</h3>
            <p className="text-gray-600">
              Akses jalan dalam dan sekitar cluster dirancang lebar dan kuat untuk kemudahan mobilitas
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-l-4" style={{ borderColor: 'var(--property-green)' }}>
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fasilitas Lengkap</h3>
            <p className="text-gray-600">
              Berbagai tempat ibadah, belanja, rekreasi, dan kesehatan tersedia di sekitar proyek
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-l-4" style={{ borderColor: 'var(--property-green)' }}>
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lingkungan Asri</h3>
            <p className="text-gray-600">
              Dikelilingi taman, mangrove, dan area hijau yang menjaga kualitas udara dan kesejukan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
