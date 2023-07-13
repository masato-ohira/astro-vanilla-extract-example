// import { ComplexStyleRule } from "@vanilla-extract/css"
import { style } from '@vanilla-extract/css'

export const css = (
  strings: TemplateStringsArray,
  ...values: any[]
): string => {
  const interpolated = strings.map((str, i) => {
    if (values[i]) {
      return str + values[i]
    } else {
      return str
    }
  })

  const cssString = interpolated.join('').trim()
  const cssRules: Record<string, any> = {}

  cssString.split(';').forEach((rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim())
    if (property && value) {
      const formattedProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase(),
      )
      cssRules[formattedProperty] = value
    }
  })

  return style(cssRules)
}

export const cssStr = (
  strings: TemplateStringsArray,
  ...values: any[]
): string => {
  const interpolated = strings.map((str, i) => {
    if (values[i]) {
      return str + values[i]
    } else {
      return str
    }
  })

  const cssString = interpolated.join('').trim()
  return cssString
}
