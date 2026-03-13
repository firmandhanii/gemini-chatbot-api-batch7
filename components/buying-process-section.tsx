'use client'

import { MessageCircle, MapPin, Home, FileText, Building2, FileCheck } from 'lucide-react'

export default function BuyingProcessSection() {
  const steps = [
    {
      step: 1,
      title: 'Hubungi Agent',
      description: 'Chat atau hubungi WhatsApp Yan Property untuk info lengkap',
      icon: MessageCircle,
    },
    {
      step: 2,
      title: 'Survey Lokasi',
      description: 'Datang langsung ke lokasi Dutaland Residence',
      icon: MapPin,
    },
    {
      step: 3,
      title: 'Pilih Unit',
      description: 'Tentukan unit yang tersedia sesuai budget',
      icon: Home,
    },
    {
      step: 4,
      title: 'Booking Unit',
      description: 'Bayar booking fee untuk mengamankan unit',
      icon: FileText,
    },
    {
      step: 5,
      title: 'Pengajuan KPR',
      description: 'Proses KPR melalui bank partner pilihan',
      icon: Building2,
    },
    {
      step: 6,
      title: 'Akad Kredit',
      description: 'Penandatanganan akad kredit dengan bank',
      icon: FileCheck,
    },
  ]

  return (
    <section id="buying-process" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            🔑 Langkah Mudah
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proses Pembelian Rumah
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses sederhana dan transparan mulai dari konsultasi hingga penandatanganan akad
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                    style={{ backgroundColor: 'var(--property-green)' }}
                  >
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon size={32} style={{ color: 'var(--property-green)' }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5"
                    style={{ backgroundColor: 'var(--property-green)', opacity: 0.3 }}
                  ></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Timeline Mobile View */}
        <div className="lg:hidden mt-8 relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: 'var(--property-green)', opacity: 0.2 }}
          ></div>
          {steps.map((item, index) => (
            <div key={index} className="mb-8 pl-16">
              <div
                className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-white border-4 border-green-50"
                style={{ backgroundColor: 'var(--property-green)' }}
              >
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
