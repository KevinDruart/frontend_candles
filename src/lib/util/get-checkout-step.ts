// biome-ignore lint/style/useImportType: <explanation>
import { Cart } from "@medusajs/medusa"

export function getCheckoutStep(
  cart: Omit<Cart, "beforeInsert" | "beforeUpdate" | "afterUpdateOrLoad">
) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (cart?.shipping_methods.length === 0) {
    return "delivery"
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return "payment"
  }
}
