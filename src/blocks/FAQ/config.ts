import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
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
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Find answers to common questions about our crochet flowers and services.',
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      defaultValue: [
        {
          question: 'How long do crochet flowers last?',
          answer: 'Our crochet flowers are designed to last indefinitely with proper care. Unlike real flowers, they will never wilt or die, making them a perfect long-lasting gift.',
        },
        {
          question: 'Can I request custom colors?',
          answer: 'Absolutely! We can create crochet flowers in virtually any color combination you desire. Just let us know your preferences when placing your order.',
        },
        {
          question: 'How do I care for my crochet flowers?',
          answer: 'Keep your crochet flowers away from excessive moisture and direct sunlight to maintain their vibrant colors. Dust them occasionally with a soft brush or compressed air.',
        },
      ],
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
