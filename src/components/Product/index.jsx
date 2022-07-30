import { StyledProducts } from './styles'
import Button from '../Button'

const Product = ({ product, handleClick }) => {
  return (
    <StyledProducts>
      <div id='productImgBox'>
        <img src={product.img} alt='' />
      </div>
      <div id='productInfoBox'>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>
          {product.price.toFixed(2)}
        </span>
        <Button green onClick={() => handleClick(product.id)}>
          Adicionar
        </Button>
      </div>
    </StyledProducts>
  )
}

export default Product