import type { Block } from 'payload'

export const ProductGrid: Block = {
  slug: 'productGrid',
  interfaceName: 'ProductGridBlock',
  fields: [
    {
      name: 'products',
      type: 'array',
      required: false,
      minRows: 0,
      maxRows: 30,
      admin: {
        description:
          'Add products to display in the grid. If none are provided, default examples will be shown.',
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
  ],
  labels: {
    singular: 'Product Grid Block',
    plural: 'Product Grid Blocks',
  },
}
