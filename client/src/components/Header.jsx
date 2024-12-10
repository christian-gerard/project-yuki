import styled from 'styled-components'

const Main  = styled.div`
    font-size: 2em;
    background-color: var(--blue);
    color: white;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content:left;
    justify-items:center;
    height:5%;
    overflow: hidden;
    text-overflow: ellipses;
    white-space: nowrap;

`;


function Header() {

    return(
        <Main>
            <p>Project Yuki</p>
        </Main>
    )
}
export default Header
