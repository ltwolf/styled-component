import styled from "styled-components"

export const HeroText = styled.h1`
  font-family: Muli, sans-serif;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-decoration: none;
  color: ${props => props.color || "hsl(227,2%,12%)"};
`

export const StyledText = styled.p`
  font-family: Muli, sans-serif;
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      case "xxSmall":
        return "0.75rem"
      default:
        return "1.125rem"
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return "400"
      case "bold":
        return "700"
      default:
        return "400"
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "medium":
        return "1.4375rem"
      case "small":
        return "1.375rem"
      case "xSmall":
        return "1.125rem"
      case "xxSmall":
        return "0.875rem"
      default:
        return "1.4375rem"
    }
  }};
  text-decoration: ${props => {
    switch (props.decoration) {
      case "underline":
        return "underline"
      case "line-through":
        return "line-through"
      default:
        return "none"
    }
  }};
  color: ${props => props.color || "hsl(227,2%,12%)"};
`
