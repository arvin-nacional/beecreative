import React from 'react'

import { OrderingProcessBlock as OrderingProcessBlockType } from '@/payload-types'
// Define interfaces until they're generated in payload-types

import { CMSLink } from '@/components/Link'
import AnimationWrapper from '@/components/AnimationWrapper'
import { ArrowRight } from 'lucide-react'

export const OrderingProcessBlock: React.FC<OrderingProcessBlockType> = (props) => {
  const {
    heading = 'How to Order',
    description = 'Our simple ordering process makes it easy to get beautiful crochet flowers delivered to your door.',
    steps = [],
    links = []
  } = props
  
  // Handle the backgroundType field that will be available after PayloadCMS types are regenerated
  // @ts-ignore - Property will exist once PayloadCMS regenerates types
  const backgroundType = props.backgroundType || 'colored';
  // Default steps if none provided from CMS
  const defaultSteps = [
    {
      number: '1',
      title: 'Browse & Choose',
      description:
        'Explore our gallery and select your favorite designs or request a custom piece.',
    },
    {
      number: '2',
      title: 'Contact Us',
      description: 'Reach out via our contact form, email, or phone to discuss your requirements.',
    },
    {
      number: '3',
      title: 'Confirm Details',
      description: "We'll discuss colors, size, quantity, and provide a quote for your approval.",
    },
    {
      number: '4',
      title: 'Delivery',
      description:
        'Your handcrafted crochet flowers will be carefully packaged and delivered to you.',
    },
  ]

  // Use CMS steps or fallback to defaults
  const displaySteps = steps && steps.length > 0 ? steps : defaultSteps

  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-[#fdf6f8]'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper direction="fade" className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800">
              {heading}
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description}
            </p>
          </div>
        </AnimationWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 mt-12">
          {displaySteps.map((step, index) => (
            <AnimationWrapper 
              key={`step-${index}`} 
              direction="up" 
              delay={0.1 * index} 
              className="flex flex-col items-center text-center space-y-3"
            >
              <AnimationWrapper 
                direction="fade" 
                delay={0.3 + (0.1 * index)} 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <span className="text-2xl font-bold text-rose-600">{step.number}</span>
              </AnimationWrapper>
              <h3 className="text-xl font-medium text-rose-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </AnimationWrapper>
          ))}
        </div>
        {Array.isArray(links) && links.length > 0 && links[0]?.link && (
          <AnimationWrapper direction="up" delay={0.5} className="flex justify-center mt-12">
            <CMSLink {...links[0].link}>
              {links[0].link.label || 'Start Your Order'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CMSLink>
          </AnimationWrapper>
        )}
      </div>
    </section>
  )
}
