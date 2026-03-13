export default function LayoutSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Denah Rumah
          </h2>
          <p className="text-lg text-gray-600">
            Tata letak modern yang efisien dan nyaman untuk keluarga Anda
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Denah Image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-xl p-8 w-full">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                style={{ maxHeight: '400px' }}
              >
                {/* Outer wall */}
                <rect x="40" y="40" width="320" height="420" fill="none" stroke="#2f7d4a" strokeWidth="4" />
                
                {/* Ruang Tamu */}
                <rect x="40" y="40" width="160" height="140" fill="#e8f5e9" stroke="#2f7d4a" strokeWidth="2" />
                <text x="120" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2f7d4a">
                  Ruang Tamu
                </text>
                <text x="120" y="145" textAnchor="middle" fontSize="12" fill="#2f7d4a">
                  4 x 3.5m
                </text>

                {/* Dapur */}
                <rect x="200" y="40" width="160" height="140" fill="#fff9c4" stroke="#2f7d4a" strokeWidth="2" />
                <text x="280" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1f5230">
                  Dapur
                </text>
                <text x="280" y="145" textAnchor="middle" fontSize="12" fill="#1f5230">
                  4 x 3.5m
                </text>

                {/* Ruang Keluarga */}
                <rect x="40" y="180" width="160" height="140" fill="#b3e5fc" stroke="#2f7d4a" strokeWidth="2" />
                <text x="120" y="265" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#01579b">
                  Ruang Keluarga
                </text>
                <text x="120" y="285" textAnchor="middle" fontSize="12" fill="#01579b">
                  4 x 3.5m
                </text>

                {/* Kamar Tidur 1 */}
                <rect x="200" y="180" width="160" height="140" fill="#f8bbd0" stroke="#2f7d4a" strokeWidth="2" />
                <text x="280" y="265" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#880e4f">
                  Kamar Tidur 1
                </text>
                <text x="280" y="285" textAnchor="middle" fontSize="12" fill="#880e4f">
                  3.5 x 3.5m
                </text>

                {/* Kamar Tidur 2 */}
                <rect x="40" y="320" width="160" height="140" fill="#f8bbd0" stroke="#2f7d4a" strokeWidth="2" />
                <text x="120" y="405" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#880e4f">
                  Kamar Tidur 2
                </text>
                <text x="120" y="425" textAnchor="middle" fontSize="12" fill="#880e4f">
                  3 x 3m
                </text>

                {/* Kamar Mandi */}
                <rect x="200" y="320" width="160" height="140" fill="#c8e6c9" stroke="#2f7d4a" strokeWidth="2" />
                <text x="280" y="405" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1b5e20">
                  Kamar Mandi
                </text>
                <text x="280" y="425" textAnchor="middle" fontSize="12" fill="#1b5e20">
                  2 x 2.5m
                </text>
              </svg>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Desain Ruang yang Optimal
              </h3>
              <p className="text-lg text-gray-600">
                Rumah tipe 30/60 kami dirancang dengan memaksimalkan fungsi setiap ruangan. Tata letak terbuka menciptakan suasana yang luas dan nyaman.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: 'var(--property-green)' }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aliran Udara Baik</h4>
                  <p className="text-gray-600">Ventilasi silang di setiap ruangan untuk udara segar sepanjang hari</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: 'var(--property-green)' }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cahaya Alami</h4>
                  <p className="text-gray-600">Jendela lebar di ruang utama untuk pencahayaan maksimal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: 'var(--property-green)' }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Privasi Terjaga</h4>
                  <p className="text-gray-600">Pemisahan ruang publik dan privat yang jelas dan nyaman</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: 'var(--property-green)' }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mudah Dibersihkan</h4>
                  <p className="text-gray-600">Desain minimalis memudahkan perawatan dan kebersihan rumah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
