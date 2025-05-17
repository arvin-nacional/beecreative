import React from 'react'
import { ProductCard } from '@/components/ProductCard'
import { ProductGridBlock as ProductGridBlockType } from '@/payload-types'

export const ProductGridBlock: React.FC<ProductGridBlockType> = ({ products = [] }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((product, index) => (
            <ProductCard
              key={`product-${index}`}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
