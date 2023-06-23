// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer1,
  Heading,
  Card,
  CardNumber,
  CardH1,
  CardName,
  CardContainer2,
  PaymentCard,
  Heading2,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const upperCase = name.toUpperCase()

  const onChangeNumber = event => setNumber(event.target.value)

  const onChangeName = event => setName(event.target.value)

  return (
    <BgContainer>
      <CardContainer1>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard ">
          <CardNumber>{number}</CardNumber>
          <div>
            <CardH1>CARDHOLDER NAME</CardH1>
            <CardName>{upperCase}</CardName>
          </div>
        </Card>
      </CardContainer1>
      <CardContainer2>
        <PaymentCard>
          <Heading2>Payment Method</Heading2>
          <Input
            type="text"
            value={number}
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <Input
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </PaymentCard>
      </CardContainer2>
    </BgContainer>
  )
}
export default CreditCard
