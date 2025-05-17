import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const OrderingProcess: Block = {
  slug: 'orderingProcess',
  interfaceName: 'OrderingProcessBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      required: true,
      defaultValue: 'colored',
      options: [
        {
          label: 'Colored Background',
          value: 'colored',
        },
        {
          label: 'White Background',
          value: 'white',
        },
      ],
      admin: {
        description: 'Choose the background style for this section',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'How to Order',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Our simple ordering process makes it easy to get beautiful crochet flowers delivered to your door.',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      defaultValue: [
        {
          number: '1',
          title: 'Browse & Choose',
          description:
            'Explore our gallery and select your favorite designs or request a custom piece.',
        },
        {
          number: '2',
          title: 'Contact Us',
          description:
            'Reach out via our contact form, email, or phone to discuss your requirements.',
        },
        {
          number: '3',
          title: 'Confirm Details',
          description:
            "We'll discuss colors, size, quantity, and provide a quote for your approval.",
        },
        {
          number: '4',
          title: 'Delivery',
          description:
            'Your handcrafted crochet flowers will be carefully packaged and delivered to you.',
        },
      ],
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
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
      ],
    },
    linkGroup({
      overrides: {
        maxRows: 1,
        label: 'Call to Action Button',
        required: false,
      },
    }),
  ],
}
