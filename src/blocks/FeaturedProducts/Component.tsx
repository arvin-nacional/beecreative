import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

// Define the interfaces for our block
interface Product {
  title: string;
  description: string;
  imageSrc: string;
}

interface FeaturedProductsBlockType {
  heading?: string;
  description?: string;
  products?: Product[];
  buttonText?: string;
  buttonLink?: string;
  blockType: 'featuredProducts';
}

export const FeaturedProductsBlock: React.FC<FeaturedProductsBlockType> = (props) => {
  const { 
    heading, 
    description, 
    products = [], 
    buttonText = 'View All Creations',
    buttonLink = '/gallery'
  } = props

  // Default products if none are provided
  const defaultProducts: Product[] = [
    {
      title: "Rose Bouquet",
      description: "A beautiful bouquet of crochet roses in various colors.",
      imageSrc: "/placeholder.svg?height=300&width=300"
    },
    {
      title: "Sunflower Wall Hanging",
      description: "Brighten up any room with this cheerful sunflower wall hanging.",
      imageSrc: "/placeholder.svg?height=300&width=300"
    },
    {
      title: "Daisy Garland",
      description: "A delicate garland of daisies, perfect for spring decor.",
      imageSrc: "/placeholder.svg?height=300&width=300"
    }
  ]

  // Use provided products or fall back to defaults
  const displayProducts = products && products.length > 0 ? products : defaultProducts

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-rose-800 dark:text-rose-400">
              {heading || 'Featured Creations'}
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description || 'Browse some of our most popular crochet flower designs.'}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {displayProducts.map((product, index) => (
            <ProductCard
              key={`product-${index}`}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href={buttonLink}>
            <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950/20">
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
