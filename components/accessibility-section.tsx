'use client'

import { MapPin, Navigation, Clock } from 'lucide-react'

export default function AccessibilitySection() {
  const distances = [
    { place: 'Pintu Tol Gabus', distance: '4.8 km' },
    { place: 'Stasiun Tambun', distance: '12.8 km' },
    { place: 'Stasiun Cibitung', distance: '13.1 km' },
  ]

  const facilities = [
    { name: 'SMKN 1 Tambun Utara', icon: '🏫' },
    { name: 'SDN Sriamur 04', icon: '🏫' },
    { name: 'Pasar Gabus', icon: '🛍️' },
    { name: 'RS Ananda Babelan', icon: '🏥' },
    { name: 'RSUD Bekasi Utara', icon: '🏥' },
  ]

  return (
    <section id="accessibility" className="w-full py-20 md:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            📍 Lokasi Strategis
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lokasi & Aksesibilitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dutaland Residence berada di lokasi strategis dengan akses mudah ke berbagai fasilitas penting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Distances */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Navigation size={28} style={{ color: 'var(--property-green)' }} />
              Akses Transportasi
            </h3>
            <div className="space-y-4">
              {distances.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-gray-700 font-medium">{item.place}</span>
                  <span className="px-4 py-2 bg-white rounded-lg font-bold" style={{ color: 'var(--property-green)' }}>
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-300 min-h-80">
            <iframe 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7516456789012!2d106.95938072346901!3d-6.255555493789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c7c4c4c4c4d%3A0x4c4c4c4c4c4c4c4c!2sDutaland%20Residence!5e0!3m2!1sid!2sid!4v1234567890" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Nearby Facilities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <MapPin size={28} style={{ color: 'var(--property-green)' }} />
            Fasilitas Sekitar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="p-6 border-2 border-gray-200 rounded-xl text-center hover:border-green-300 hover:bg-green-50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{facility.icon}</div>
                <p className="text-sm font-medium text-gray-700">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
