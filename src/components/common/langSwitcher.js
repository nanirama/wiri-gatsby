import * as React from "react"
import { navigate } from "gatsby"

import { linkResolver } from "../../utils/linkResolver"

export const LanguageSwitcher = ( data ) => {
  console.log("LanguageSwitcher", data)
  const activeDocMeta = data.activeDocMeta
  const currentLang = activeDocMeta.lang
  const currentLangOption = (
    <option value={currentLang}>{currentLang.slice(0, 2).toUpperCase()}</option>
  )
console.log(activeDocMeta.alternate_languages)
  const alternateLangOptions = activeDocMeta.alternate_languages.map(
    (altLang, index) => (
      <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
        {altLang.lang.slice(0, 2).toUpperCase()}
      </option>
    )
  )

  const handleLangChange = event => {
    navigate(event.target.value)
  }

  return (
    <li className="language-switcher">
      <select value={currentLang} onChange={handleLangChange}>
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </li>
  )
}


export default LanguageSwitcher