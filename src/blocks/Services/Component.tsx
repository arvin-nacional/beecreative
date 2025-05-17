import { ServiceCard } from '@/components/ServiceCard'
import React from 'react'
import type { ServicesBlock as ServicesBlockType } from '@/payload-types'

export const ServicesBlock: React.FC<ServicesBlockType> = ({ services = [] }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services?.map((service, index) => (
            <ServiceCard
              key={`service-${index}`}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
