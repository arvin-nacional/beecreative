import React from 'react'

// Define the interface since it's not yet in payload-types.ts
interface Testimonial {
  quote: string
  author: string
}

interface TestimonialsBlockType {
  heading?: string
  testimonials?: Testimonial[]
  blockType: 'testimonials'
}

export const TestimonialsBlock: React.FC<TestimonialsBlockType> = (props) => {
  const { heading, testimonials = [] } = props

  // Fallback testimonials if none are provided
  const defaultTestimonials: Testimonial[] = [
    {
      quote:
        "The crochet bouquet I ordered was absolutely stunning. It's a forever keepsake from my wedding day.",
      author: 'Emily R.',
    },
    {
      quote:
        'I love the sunflower wall hanging I purchased. It adds the perfect touch of warmth to my living room.',
      author: 'Michael T.',
    },
    {
      quote:
        "The workshop was so much fun! I learned how to make my own crochet flowers and now I'm hooked!",
      author: 'Sarah L.',
    },
  ]

  // Use provided testimonials or fallback to defaults
  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-rose-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'What Our Customers Say'}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {displayTestimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={`testimonial-${index}`}
              className="flex flex-col gap-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-rose-600 dark:text-rose-400">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
