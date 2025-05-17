import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'

import type { Media as MediaType } from '@/payload-types'

interface ProductCardProps {
  title: string
  description: string
  image: string | MediaType
}

export function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-square relative">
        <Media resource={image} />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-400">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}
