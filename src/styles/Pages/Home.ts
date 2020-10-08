import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2{
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: #151515;
    color: #fff;
    text-align: center;
  }
`

export const LensContainer = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self:center;
  margin: 0 auto;

  background: #fff;
  position: absolute;
  border-radius: 0.8rem;
  padding: 1.2rem;
  cursor: pointer;

  h3{
    font-family: -'Helvetica Neue', sans-serif;
    color: #33848A;
  }
`
