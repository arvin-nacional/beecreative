import React from 'react'
import type { AboutCrochetBlock as AboutCrochetBlockType } from '@/payload-types'

export const AboutCrochetBlock: React.FC<AboutCrochetBlockType> = (props) => {
  const { heading, description } = props

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'About Our Crochet Flowers'}
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description ||
                'Each crochet flower is handmade with care and attention to detail. We use only the finest materials to create beautiful, long-lasting pieces that bring joy to any space.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
