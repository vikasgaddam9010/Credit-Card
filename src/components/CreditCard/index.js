import {
  MainContainer,
  HalfContainer,
  BgImag,
  Heading,
  PaymentContainer,
  Input,
} from './styledComponents'

import {useState} from 'react'

const CreditCard = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const handleCardNumber = event => setCardNumber(event.target.value)

  const handleCardName = event => setCardName(event.target.value)

  return (
    <MainContainer>
      <HalfContainer bgColor>
        <Heading bottom>CREDIT CARD</Heading>
        <BgImag data-testid="creditCard">
          <p>{cardNumber}</p>
          <p>CARDHOLDER NAME</p>
          <p>{cardName.toUpperCase()}</p>
        </BgImag>
      </HalfContainer>
      <HalfContainer center>
        <PaymentContainer>
          <Heading>Payment Method</Heading>
          <Input
            value={cardNumber}
            type="text"
            placeholder="Card Number"
            onChange={handleCardNumber}
          />
          <Input
            value={cardName}
            type="text"
            placeholder="Cardholder Name"
            onChange={handleCardName}
          />
        </PaymentContainer>
      </HalfContainer>
    </MainContainer>
  )
}

export default CreditCard
