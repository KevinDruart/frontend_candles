import { Button, Container, Text } from "@medusajs/ui"
import { cookies } from "next/headers"

const ProductOnboardingCta = () => {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  if (!isOnboarding) {
    return null
  }

  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-ui-fg-base text-xl">
          Vous avez creer un produit test avec succes! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
        Vous pouvez maintenant continuer à configurer votre boutique dans l&apos;administration.
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <Button className="w-full">Continuer a configuer la boutique</Button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
