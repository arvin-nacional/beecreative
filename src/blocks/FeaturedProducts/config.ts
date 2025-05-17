import type { Block } from 'payload'

export const FeaturedProducts: Block = {
  slug: 'featuredProducts',
  interfaceName: 'FeaturedProductsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Featured Creations',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Browse some of our most popular crochet flower designs.',
    },
    {
      name: 'products',
      type: 'array',
      required: false,
      minRows: 0,
      maxRows: 12,
      admin: {
        description: 'Add featured products to showcase on the page.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'The name of the product',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'A brief description of the product',
          },
        },
        {
          name: 'image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'Upload the product image',
          },
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: false,
      defaultValue: 'View All Creations',
      admin: {
        description: 'Text to display on the button',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      defaultValue: '/gallery',
      admin: {
        description: 'URL the button links to',
      },
    },
  ],
  labels: {
    singular: 'Featured Products Block',
    plural: 'Featured Products Blocks',
  },
}
