'use client'

import { ServiceCard } from '@/components/ServiceCard'
import React from 'react'
import type { ServicesBlock as ServicesBlockType } from '@/payload-types'
import AnimationWrapper from '@/components/AnimationWrapper'

export const ServicesBlock: React.FC<ServicesBlockType> = ({ services = [] }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimationWrapper className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" direction="fade" delay={0.1}>
          {services?.map((service, index) => (
            <AnimationWrapper
              key={`service-${index}`}
              direction="up"
              delay={0.2 + (index * 0.1)}
              distance={30}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                extended
              />
            </AnimationWrapper>
          ))}
        </AnimationWrapper>
      </div>
    </section>
  )
}
