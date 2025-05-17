import type { Block } from 'payload'

export const ServicesPreview: Block = {
  slug: 'servicesPreview',
  interfaceName: 'ServicesPreviewBlock',
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
      defaultValue: 'Our Services',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      defaultValue:
        'From custom bouquets to decorative pieces, we offer a variety of crochet flower services.',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 9,
      defaultValue: [
        {
          title: 'Custom Bouquets',
          description: 'Handcrafted bouquets for weddings, anniversaries, or any special occasion.',
          icon: 'Flower',
        },
        {
          title: 'Home Decor',
          description: 'Beautiful crochet flowers to brighten up your living space.',
          icon: 'Home',
        },
        {
          title: 'Workshops',
          description: 'Learn to crochet your own flowers with our beginner-friendly workshops.',
          icon: 'BookOpen',
        },
      ],
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
          type: 'text',
          required: true,
          defaultValue: 'Flower',
          admin: {
            description: 'Icon name from Lucide Icons (e.g., Flower, Home, BookOpen)',
          },
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'View All Services',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      defaultValue: '/services',
    },
  ],
}
