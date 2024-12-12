import styled from 'styled-components'

const Main  = styled.div`
    font-size: 2em;
    background-color: var(--blue);
    color: white;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content:space-between;
    align-items:center;
    height:5%;
    overflow: hidden;
    text-overflow: ellipses;
    white-space: nowrap;

`;

const AboutButton = styled.div`
    width: 100px;
    height: 25px;
    background-color: transparent; 
    border: transparent;
    color: white;
    font-size: .75em;
    text-decoration: underline;
`

function Header({handleAboutModal}) {

    return(
        <Main>
            <p>Project Yuki</p>
            <AboutButton onClick={handleAboutModal}>About</AboutButton>
        </Main>
    )
}
export default Header
