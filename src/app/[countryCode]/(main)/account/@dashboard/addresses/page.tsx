// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer, getRegion } from "@lib/data"

import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Adresses",
  description: "Voir vos adresses de livraison",
}

export default async function Addresses() {
  const nextHeaders = headers()
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Adresse de livraison</h1>
        <p className="text-base-regular">
        Consultez et mettez à jour vos adresses de livraison, vous pouvez en ajouter autant que vous le souhaitez.
         Enregistrer vos adresses les rendra disponibles lors du paiement.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
