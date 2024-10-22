// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveOrder } from "@lib/data"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return {
    title: `Commannde N° #${order.display_id}`,
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    description: `Voir votre commande`,
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}
