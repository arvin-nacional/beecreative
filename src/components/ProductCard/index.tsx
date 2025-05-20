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
    <Card className="overflow-hidden h-full group hover:shadow-md">
      <div className="aspect-square relative w-full overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 h-full w-full">
          <Media 
            resource={image} 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-rose-800 dark:text-rose-400 transition-colors duration-300 group-hover:text-rose-600 dark:group-hover:text-rose-300">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}
