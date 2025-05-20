'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

import { FeaturedProductsBlock as FeaturedProductsBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import AnimationWrapper from '@/components/AnimationWrapper'

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
        <AnimationWrapper className="flex flex-col items-center justify-center space-y-4 text-center" direction="fade">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'Featured Creations'}
            </h2>
            <AnimationWrapper delay={0.2} direction="fade">
              <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {description || 'Browse some of our most popular crochet flower designs.'}
              </p>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {products?.map((product, index) => (
            <AnimationWrapper
              key={`product-${index}`}
              direction="up"
              delay={0.1 * (index + 1)}
              className="h-full"
            >
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
              />
            </AnimationWrapper>
          ))}
        </div>
        <AnimationWrapper className="flex justify-center mt-8" direction="up" delay={0.4}>
          {links?.[0]?.link && (
            <div className="transition-transform duration-300 hover:scale-105">
              <CMSLink {...links?.[0]?.link} className="flex items-center group">
                {links?.[0]?.link.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CMSLink>
            </div>
          )}
        </AnimationWrapper>
      </div>
    </section>
  )
}
