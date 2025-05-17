import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { AboutCrochetBlock } from '@/blocks/AboutCrochet/Component'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FeaturedProductsBlock } from '@/blocks/FeaturedProducts/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ProductGridBlock } from '@/blocks/ProductGrid/Component'
import { ServicesPreviewBlock } from '@/blocks/ServicesPreview/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { SiteHeaderBlock } from '@/blocks/SiteHeader/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'
import { OrderingProcessBlock } from '@/blocks/OrderingProcess/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

const blockComponents = {
  aboutCrochet: AboutCrochetBlock,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  featuredProducts: FeaturedProductsBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  productGrid: ProductGridBlock,
  servicesPreview: ServicesPreviewBlock,
  testimonials: TestimonialsBlock,
  siteHeader: SiteHeaderBlock,
  servicesBlock: ServicesBlock,
  heroSection: HeroSectionBlock,
  orderingProcess: OrderingProcessBlock,
  faq: FAQBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
