import styled from 'styled-components'

const Main  = styled.div`
    font-size: 2em;
    background-color: var(--blue);
    color: white;
    padding: 10px;
    text-align: center;

`;


function Header() {

    return(
        <Main>
            <p>Project Yuki</p>
        </Main>
    )
}
export default Header