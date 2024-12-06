import styled from 'styled-components'

const Main = styled.div`
    background-color: var(--blue);
    font-size: 0.9em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipses;
    white-space: nowrap;
    height:3%;
    width:100%;
`
function Footer(){

    return(
        <Main>
            <p>Built by Cole Herndon & Christian Gerard</p>
        </Main>
    )
}
export default Footer