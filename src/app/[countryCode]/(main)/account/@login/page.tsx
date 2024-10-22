// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Se connecter",
  description: "Connexion a votre compte Candlesandpots.",
}

export default function Login() {
  return <LoginTemplate />
}
