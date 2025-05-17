import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Flower',
              value: 'Flower',
            },
            {
              label: 'Home',
              value: 'Home',
            },
            {
              label: 'BookOpen',
              value: 'BookOpen',
            },
            {
              label: 'Calendar',
              value: 'Calendar',
            },
            {
              label: 'Gift',
              value: 'Gift',
            },
            {
              label: 'Package',
              value: 'Package',
            },
          ],
          admin: {
            description: 'Icon name from Lucide Icons (e.g., Flower, Home, BookOpen)',
          },
        },
      ],
    },
  ],
}
