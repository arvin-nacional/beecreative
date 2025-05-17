import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { ServicesPreviewBlock as ServicesPreviewBlockType } from '@/payload-types'
import { ServiceCard } from '@/components/ServiceCard'

export const ServicesPreviewBlock: React.FC<ServicesPreviewBlockType> = ({
  heading,
  subheading,
  services = [],
  buttonText,
  buttonLink,
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
              {heading || 'Our Services'}
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {subheading ||
                'From custom bouquets to decorative pieces, we offer a variety of crochet flower services.'}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {services && services.length > 0 ? (
            services.map(
              (service: { title: string; description: string; icon: string }, index: number) => (
                <ServiceCard
                  key={`service-${index}`}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ),
            )
          ) : (
            <>
              <ServiceCard
                title="Custom Bouquets"
                description="Handcrafted bouquets for weddings, anniversaries, or any special occasion."
                icon="Flower"
              />
              <ServiceCard
                title="Home Decor"
                description="Beautiful crochet flowers to brighten up your living space."
                icon="Home"
              />
              <ServiceCard
                title="Workshops"
                description="Learn to crochet your own flowers with our beginner-friendly workshops."
                icon="BookOpen"
              />
            </>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link href={buttonLink || '/services'}>
            <Button
              variant="outline"
              className="border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30"
            >
              {buttonText || 'View All Services'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
