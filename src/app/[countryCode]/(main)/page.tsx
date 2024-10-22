// biome-ignore lint/style/useImportType: <explanation>
import { Product } from "@medusajs/medusa"
// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
// biome-ignore lint/style/useImportType: <explanation>
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

import CandleMakingStory from "@modules/home/components/conception"
import MaterialsPremium from "@modules/home/components/material"
import Newsletter from "@modules/home/components/newsletters"

export const metadata: Metadata = {
  title: "Candlesandpots",
  description:
    "Découvrez l'alliance parfaite entre artisanat authentique et élégance intemporelle. Chaque bougie et pot qui sort de notre atelier raconte une histoire unique, façonnée avec passion.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      // biome-ignore lint/complexity/noForEach: <explanation>
      responses.forEach(({ response, queryParams }) => {
        // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <MaterialsPremium />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <CandleMakingStory />
      <Newsletter />
    </>
  )
}
