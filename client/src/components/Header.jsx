import styled from 'styled-components'

const Main  = styled.div`
    background-color: var(--blue);
    color: white;
    padding: 10px;
`;


function Header() {

    return(
        <Main>
            <p>Project Yuki</p>
        </Main>
    )
}
export default Header