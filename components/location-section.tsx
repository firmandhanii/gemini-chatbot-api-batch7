'use client'

import { MapPin, Clock, Navigation, Zap } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="location" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Section Only */}
        <div className="mb-4 rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[500px] bg-gray-200 border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6785516532277!2d106.8271387!3d-6.2297222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a5a5a5a5ad%3A0x1234567890!2sJakarta!5e0!3m2!1sid!2sid!4v1234567890"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
