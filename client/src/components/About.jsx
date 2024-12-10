import styled from 'styled-components'

function About ({handleAboutModal}) {
  const Main = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    display:flex;
    align-items: center;
    justify-content: center;
    `
  const Modal = styled.div`
    background-color:white;
    color: white;
    height: 85%;
    width: 90%;
    border: 2px black solid;
  `
  const Title = styled.div`
    font-size: 2em;
    background-color: var(--blue);
  `
  const ExitButton = styled.button`
    background-color: var(--light-blue);
    height:100px;
    width: 100px;
    color: white;
  `

  return (
    <Main>
      <Modal>
        <Title>
          About Yuki Project, where we get data etc.
          <ExitButton onClick={handleAboutModal}>
            X
          </ExitButton>
        </Title>
     </Modal>

    </Main>
  )
}
export default About
