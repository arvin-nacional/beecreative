import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

import { FeaturedProductsBlock as FeaturedProductsBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const FeaturedProductsBlock: React.FC<FeaturedProductsBlockType> = ({
  heading,
  description,
  products,
  links,
  backgroundType,
}) => {
  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-[#fdf6f8]'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'Featured Creations'}
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description || 'Browse some of our most popular crochet flower designs.'}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {products?.map((product, index) => (
            <ProductCard
              key={`product-${index}`}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <CMSLink {...links?.[0]?.link}>
            <ArrowRight className="ml-2 h-4 w-4" />
          </CMSLink>
        </div>
      </div>
    </section>
  )
}
