'use client'

import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function AgentContactSection() {
  const whatsappNumber = '6287875483400'
  const email = 'sugiyantotegal5758@gmail.com'
  const phone = '0878 7548 3400'

  return (
    <section id="agent-contact" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            📞 Hubungi Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marketing Yan Property
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim profesional kami siap membantu menjawab semua pertanyaan Anda
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-12 text-white shadow-2xl"
            style={{ backgroundColor: 'var(--property-green)' }}
          >
            {/* Agent Name */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">👨‍💼</span>
              </div>
              <h3 className="text-3xl font-bold">Yan Property</h3>
              <p className="text-green-100 mt-2">Marketing Agent</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-10">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer border-2 border-white"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-all" style={{ color: 'var(--property-green)' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-xl font-bold text-gray-900">{phone}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer border-2 border-white"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-all" style={{ color: 'var(--property-green)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telepon</p>
                  <p className="text-xl font-bold text-gray-900">{phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer border-2 border-white"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-all" style={{ color: 'var(--property-green)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-xl font-bold text-gray-900">{email}</p>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-center text-lg"
            >
              Chat via WhatsApp
            </a>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'var(--property-green)', color: 'white' }}>
                <MessageCircle size={24} />
              </div>
              <p className="text-gray-600">Respon Cepat</p>
              <p className="font-bold text-gray-900">Dalam hitungan menit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'var(--property-green)', color: 'white' }}>
                <MessageCircle size={24} />
              </div>
              <p className="text-gray-600">Konsultasi Gratis</p>
              <p className="font-bold text-gray-900">Tanpa biaya apapun</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'var(--property-green)', color: 'white' }}>
                <MessageCircle size={24} />
              </div>
              <p className="text-gray-600">Info Lengkap</p>
              <p className="font-bold text-gray-900">Semua yang Anda tanya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
