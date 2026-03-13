'use client'

import { DollarSign, CreditCard, Percent } from 'lucide-react'

export default function FinancingSection() {
  const financingOptions = [
    { label: 'Harga Rumah', value: 'Mulai dari Rp 185 Juta', icon: DollarSign },
    { label: 'DP (All In)', value: 'Rp 2 Juta', icon: Percent },
    { label: 'Cicilan per Bulan', value: 'Rp 1.2 Juta Flat hingga Lunas', icon: CreditCard },
  ]

  const banks = [
    { name: 'BTN', logo: '🏦' },
    { name: 'BTN Syariah', logo: '🕌' },
    { name: 'BJB', logo: '🏦' },
    { name: 'Mandiri', logo: '🏦' },
  ]

  return (
    <section id="financing" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: 'var(--property-green)' }}>
            💰 Cicilan Terjangkau
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cicilan & Pembiayaan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan skema pembiayaan dengan bunga kompetitif dan proses approval cepat
          </p>
        </div>

        {/* Financing Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {financingOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--property-green)' }}
                >
                  <Icon size={32} />
                </div>
                <p className="text-gray-600 font-medium mb-2">{option.label}</p>
                <p className="text-2xl font-bold text-gray-900">{option.value}</p>
              </div>
            )
          })}
        </div>

        {/* Bank Partners */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Bank Partner KPR</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{bank.logo}</div>
                <p className="font-bold text-gray-900 text-center">{bank.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            className="px-8 py-4 text-white font-bold rounded-xl text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: 'var(--property-green)' }}
          >
            Konsultasi Simulasi KPR
          </button>
          <p className="text-gray-600 mt-4">Gratis konsultasi dengan tim marketing Yan Property</p>
        </div>
      </div>
    </section>
  )
}
