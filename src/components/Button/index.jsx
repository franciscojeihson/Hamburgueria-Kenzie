import { StyledButton } from './styles'

const Button = ({
  onClick,
  children,
  width = '',
  height = '',
  fontSize = '',
  green = true,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      children={children}
      width={width}
      height={height}
      fontSize={fontSize}
      green={green}
    >
      {children}
    </StyledButton>
  )
}

export default Button