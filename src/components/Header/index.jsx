import InputSearch from '../InputSearch'
import Button from '../Button'
import { StyledHeader } from './styles'
import Logo from '../Logo'
import { useState, useRef } from 'react'

const Header = ({ showProducts, setFilteredProducts }) => {
  const [inputData, setInputData] = useState('')
  const inputRef = useRef(null)

  const handleInput = () => {
    const inputElement = inputRef.current.querySelector('input')
    inputElement.value = ''

    showProducts(inputData)
  }

  return (
    <StyledHeader>
      <Logo setFilteredProducts={setFilteredProducts} />
      <form onSubmit={(e) => e.preventDefault()} ref={inputRef}>
        <InputSearch setInputData={setInputData} />
        <Button type='button' onClick={handleInput}>
          Pesquisar
        </Button>
      </form>
    </StyledHeader>
  )
}

export default Header
