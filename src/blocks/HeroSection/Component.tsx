import React from 'react'
import type { HeroSectionBlock as HeroSectionBlockType } from '@/payload-types'
import Image from 'next/image'

import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const HeroSectionBlock: React.FC<HeroSectionBlockType> = ({
  heading,
  description,
  links,
  image,
}) => {
  // We're still accepting props for PayloadCMS compatibility, but using hardcoded values in this example
  // In a real implementation, you'd use props.heading, props.description, etc.

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf6f8]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-rose-800">
                {heading}
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex md:justify-start gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            {image && typeof image === 'object' && image.url && (
              <Media
                resource={image}
                alt={image.alt || 'Dental care image'}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
