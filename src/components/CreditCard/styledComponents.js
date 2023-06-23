// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  height: 100vh;
`

export const CardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#3b4b69, #475569);
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 23px;
  border-bottom: 2px solid #ffd773;
  width: 160px;
  margin-bottom: 200px;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 10px;
  width: 370px;
  height: 250px;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 23px;
`
export const CardH1 = styled.p`
  color: #ffffff;
  font-size: 16px;

  margin-top: 20px;
`

export const CardName = styled.p`
  color: #ffffff;
  font-size: 16px;
`

export const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 50%;
  height: 100vh;
`
export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`
export const Heading2 = styled.h1`
  color: #3b4b69;
  font-size: 16px;
`
export const Input = styled.input`
  outline: none;
  border: 1px solid #d3d9e0;
  padding: 5px;
  margin-bottom: 20px;
`
