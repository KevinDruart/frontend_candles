// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Oups, la page que vous cherchez n'existe plus",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page introuvables</h1>
      <p className="text-small-regular text-ui-fg-base">
        Oups... la page que vous cherchez est introuvable.
      </p>
      <InteractiveLink href="/">Retourner a la page d&apos;accueil</InteractiveLink>
    </div>
  )
}
