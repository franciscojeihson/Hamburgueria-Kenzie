import { StyledInput } from './styles'

const InputSearch = ({ setInputData, ref, ...rest }) => {
  return (
    <StyledInput
      {...rest}
      onChange={(event) => {
        setInputData(event.target.value)
      }}
      ref={ref}
      type='search'
      placeholder='O que você procura?'
    />
  )
}

export default InputSearch