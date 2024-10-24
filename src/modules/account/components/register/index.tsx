"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-large-semi uppercase mb-6">
        Bienvenue chez Candlesandpots
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
      Créez votre profil Membre et bénéficiez d&apos;une expérience shopping améliorée.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Prénom"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Nom"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input label="Téléphone" name="phone" type="tel" autoComplete="tel" data-testid="phone-input" />
          <Input
            label="Mot de passe"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
        En créant un compte, vous acceptez{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            la Politique de Confidentialité
          </LocalizedClientLink>{" "}
          et{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            les Conditions d&apos;Utilisation du site.
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6 bg-[#3b1b00] text-white py-3 rounded-full hover:bg-[#f5d6c3] hover:text-[#3b1b00] transition" data-testid="register-button">Rejoindre</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Déjà membre?{" "}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Connectez vous
        </button>
        .
      </span>
    </div>
  )
}

export default Register
