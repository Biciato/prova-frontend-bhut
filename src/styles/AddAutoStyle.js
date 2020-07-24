import styled from "styled-components"

const AddAutoSection = styled.div`
  background: aliceblue;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  box-sizing: border-box;
  padding: 5em;
`

const FormContainer = styled.div`
  display: flex;
  max-width: 900px;
`
const LeftContainer = styled.div`
  background: steelblue;
  overflow: hidden;
  padding: 40px 0 0 0;
  position: relative;
  text-align: center;
  width: 20em;
`

const Header1 = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  font-size: 24px;
`

const HeaderIcon = styled.i`
  background: antiquewhite;
  border-radius: 50%;
  color: #807182;
  font-size: 24px;
  margin-right: 5px;
  padding: 10px;
  transform: rotate(-45deg);
`

const ImgDiv = styled.div`
  bottom: -5px;
  position: absolute;
  text-align: center;

  &:before {
    background: #807182;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.4;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
}
`

const LeftImg = styled.img`
  filter: sepia(100%);
  width: 70%;
`

const RightContainer = styled.div`
  background: antiquewhite;
  display: flex;
  flex-direction: column;
  width: 500px;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin: 1.6em 1em;
`

const Set = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
`

const SetInputContainer = styled.div`
  padding: 1em;
`

const SaveBtn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 38px;
  line-height: 38px;
  width: 10em;
  border-radius: 19px;
  background: #807182;
  border: 1px solid transparent;
  color: #fff;
  margin: auto;
  cursor:pointer
`

const FormFooter = styled.footer`
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 5px 40px;
`

const ErrorSpan = styled.span`
  color: red;
`

export {
  AddAutoSection,
  FormFooter,
  SaveBtn,
  HeaderIcon,
  Set,
  Header,
  RightContainer,
  ImgDiv,
  LeftImg,
  Header1,
  LeftContainer,
  FormContainer,
  SetInputContainer,
  ErrorSpan
}
