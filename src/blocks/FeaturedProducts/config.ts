import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const FeaturedProducts: Block = {
  slug: 'featuredProducts',
  interfaceName: 'FeaturedProductsBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      options: [
        {
          label: 'Colored',
          value: 'colored',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
    },
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 1,
        label: 'Button',
        required: true,
      },
    }),
  ],
  labels: {
    singular: 'Featured Products Block',
    plural: 'Featured Products Blocks',
  },
}
