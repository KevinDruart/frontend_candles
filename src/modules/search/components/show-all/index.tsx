import { Container, Text } from "@medusajs/ui"
import { useHits, useSearchBox } from "react-instantsearch-hooks-web"

import InteractiveLink from "@modules/common/components/interactive-link"

const ShowAll = () => {
  const { hits } = useHits()
  const { query } = useSearchBox()
  const width = typeof window !== "undefined" ? window.innerWidth : 0

  if (query === "") return null
  if (hits.length > 0 && hits.length <= 6) return null

  if (hits.length === 0) {
    return (
      <Container
        className="flex gap-2 justify-center h-fit py-2"
        data-testid="no-search-results-container"
      >
        <Text>Aucun résultat trouver</Text>
      </Container>
    )
  }

  return (
    <Container className="flex sm:flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <Text>Voir les premiers {width > 640 ? 6 : 3} resultat.</Text>
      <InteractiveLink href={`/results/${query}`}>Voir tous</InteractiveLink>
    </Container>
  )
}

export default ShowAll
