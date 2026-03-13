'use client'

import { Home, Ruler, DoorOpen, Utensils, ParkingCircle, Leaf, DollarSign } from 'lucide-react'

export default function UnitInfoSection() {
  const unitInfo = [
    { label: 'Project', value: 'Dutaland Residence', icon: Home },
    { label: 'Tipe Rumah', value: 'Type 30/60 - Hook 34/97-124', icon: Home },
    { label: 'Luas Bangunan', value: '30 m²', icon: Ruler },
    { label: 'Luas Tanah', value: '60 m²', icon: Ruler },
    { label: 'Kamar Tidur', value: '2 Kamar', icon: DoorOpen },
    { label: 'Kamar Mandi', value: '1 Kamar', icon: DoorOpen },
  ]

  const facilities = ['Ruang Tamu', 'Dapur', 'Carport', 'Taman']
  const price = 'Rp 185 Juta'

  return (
    <section id="unit-info" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            🏠 Informasi Unit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spesifikasi Rumah
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desain modern dengan ukuran efisien dan fasilitas lengkap untuk keluarga Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specifications Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {unitInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--property-green)', opacity: 0.1 }}>
                        <Icon size={20} style={{ color: 'var(--property-green)' }} />
                      </div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                    </div>
                    <p className="text-xl font-bold text-gray-900">{info.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Facilities */}
            <div className="mt-8 bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Fasilitas Rumah</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--property-green)' }}></div>
                    <span className="text-gray-700 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="flex flex-col justify-between">
            <div
              className="rounded-2xl p-8 text-white text-center h-full flex flex-col justify-center items-center"
              style={{ backgroundColor: 'var(--property-green)' }}
            >
              <Leaf className="mb-4" size={40} />
              <p className="text-sm font-semibold mb-2 opacity-90">Harga Mulai Dari</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{price}</h3>
              <p className="text-sm opacity-80">Per Unit Type 30/60</p>
              
              <button 
                className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Hubungi Marketing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
