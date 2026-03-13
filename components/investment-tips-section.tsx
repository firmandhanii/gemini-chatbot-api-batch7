'use client'

import { MapPin, TrendingUp, DollarSign, CheckCircle } from 'lucide-react'

export default function InvestmentTipsSection() {
  const tips = [
    {
      icon: MapPin,
      title: 'Lokasi adalah Faktor Utama',
      description: 'Pilih properti yang dekat transportasi, fasilitas umum, dan area yang sedang berkembang untuk nilai investasi jangka panjang.',
    },
    {
      icon: TrendingUp,
      title: 'Manfaatkan KPR Subsidi',
      description: 'Cicilan lebih ringan dan terjangkau melalui program KPR dengan dukungan pemerintah atau bank partner yang telah dipilih.',
    },
    {
      icon: DollarSign,
      title: 'Beli Saat Harga Masih Rendah',
      description: 'Properti cenderung naik nilainya setiap tahun. Beli sekarang dan nikmati apresiasi nilai di masa depan.',
    },
    {
      icon: CheckCircle,
      title: 'Gunakan Agent Terpercaya',
      description: 'Gunakan bantuan Yan Property untuk memastikan proses pembelian yang aman, transparan, dan sesuai dengan kebutuhan Anda.',
    },
  ]

  return (
    <section id="investment-tips" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            🎓 Panduan Investasi
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tips Investasi Properti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelajari strategi investasi properti yang tepat untuk memaksimalkan keuntungan Anda
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-green-50 to-white border-2 border-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background accent animation */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--property-green)' }}
                  >
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tip.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ backgroundColor: 'var(--property-green)' }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Box */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siap Berinvestasi di Dutaland Residence?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Dengan lokasi strategis, harga terjangkau, dan fasilitas lengkap, Dutaland Residence adalah pilihan investasi properti yang tepat untuk masa depan keluarga Anda. Tim profesional kami siap membantu mewujudkan impian memiliki rumah idaman.
            </p>
            <a
              href="https://wa.me/6287875483400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-bold rounded-xl text-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: 'var(--property-green)' }}
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
