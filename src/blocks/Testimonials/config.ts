import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'What Our Customers Say',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: false,
      minRows: 0,
      maxRows: 12,
      admin: {
        description: 'Add testimonials from your customers.'
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          admin: {
            description: 'The testimonial quote from your customer'
          }
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          admin: {
            description: 'The name of the person who provided this testimonial'
          }
        }
      ]
    }
  ],
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
  },
}
