import InteractiveLink from "@modules/common/components/interactive-link"
// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Oups... il semble que cet page soit introuvable!",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page introuvable</h1>
      <p className="text-small-regular text-ui-fg-base">
       OUps... il semble que cet page soit introuvable!
      </p>
      <InteractiveLink href="/">Retourner a l'accueil</InteractiveLink>
    </div>
  )
}
