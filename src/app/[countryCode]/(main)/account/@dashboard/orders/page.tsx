// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { listCustomerOrders } from "@lib/data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Commandes",
  description: "Aperçu des précédentes commandes.",
}

export default async function Orders() {
  const orders = await listCustomerOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Commandes</h1>
        <p className="text-base-regular">
        Consultez vos commandes précédentes et leur statut. Vous pouvez également créer
        retours ou échanges de vos commandes si nécessaire.
        </p>
      </div>
      <div>
        <OrderOverview orders={orders} />
      </div>
    </div>
  )
}
