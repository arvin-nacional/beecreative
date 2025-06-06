'use client'

import React from 'react'

import { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'
import AnimationWrapper from '@/components/AnimationWrapper'

export const TestimonialsBlock: React.FC<TestimonialsBlockType> = ({
  heading,
  testimonials,
  backgroundType,
}) => {
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-[#fdf6f8]'
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper className="flex flex-col items-center justify-center space-y-4 text-center" direction="fade">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'What Our Customers Say'}
            </h2>
          </div>
        </AnimationWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonials?.map((testimonial, index) => (
            <AnimationWrapper
              key={`testimonial-${index}`}
              className="flex flex-col gap-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              direction="up"
              delay={0.1 * index}
              distance={30}
            >
              <p className="text-gray-600 dark:text-gray-300 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-rose-600 dark:text-rose-400">
                - {testimonial.author}
              </p>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
