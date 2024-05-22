import styled from 'styled-components'

export const MainContainer = styled.div`
height:100vh;
width: 100vw;
display: flex;
@media(max-width: 576px){
    min-width: 500px;
    flex-direction: column;
}
`

export const HalfContainer = styled.div`
height: 100vh;
width: 50vw;
min-width: 550px;
padding: 50px;
background-color: ${props => (props.bgColor ? '#3b4b69' : '#ffffff')};
display: flex;
flex-direction: column;
justify-content: ${props => (props.center ? 'center' : 'flex-start')};
align-items: ${props => (props.center ? 'center' : 'flex-start')};
@media(max-width: 576px){
    width: 550px;
}
`
export const BgImag = styled.div`
background-image: url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
background-size: cover;
color: #ffffff;
padding: 30px;
padding-top: 100px;
border-radius: 15px;
height: 300px;
width: 100%;
margin: auto;
`

export const Heading = styled.h1`
margin-left: auto;
margin-right: auto;
color: ${props => props.bottom && '#ffffff'};
border-bottom: ${props => props.bottom && '4px solid #ffd773'};
`

export const PaymentContainer = styled.div`
padding: 50px;
border-radius: 15px;
box-shadow: 0px 0px 10px 2px lightgrey;
`

export const Input = styled.input`
width: 100%;
padding: 10px;
color: black;
border : 1px solid lightgrey;
border-radius: 5px;
margin-top: 30px;
`
