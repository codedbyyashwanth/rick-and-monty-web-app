import styled from 'styled-components'

export const OuterCard = styled.div`
        width : 98%;
        min-height: fit-content;
        max-width : 18rem;
        margin : 2rem 1.4rem;
        overflow : hidden;
        border-radius : 1rem;
        perspective : 5000px;

        &:hover {
                cursor: pointer;
        }

        &:hover #inner {
                transform : rotateY(180deg);
        }
`

export const InnerCard = styled.div`
        position : relative;
        width : 100%;
        height : 100%;
        transition : transform 1s ease;
        transform-style: preserve-3d;
        border-radius : 1rem;
`

export const FrontSide = styled.div`
        width : 100%;
        height : 100%;
        border-radius : 1rem;
`

export const BackSide = styled.div`
        width : 100%;
        height : 100%;
        background-color : #fafafa;
        transform : rotateY(180deg);
        position : absolute;
        top : 0;
        left : 0;
        backface-visibility : hidden;
        border-radius : 1rem;
        display : flex;
        justify-content : center;
        align-items : center;
`

export const ImgContainer = styled.div`
        width : 100%;
        height: 100%;
        display : grid;
        place-items : center;

        & img {
                width : 100%;
                height : 100%;
                object-fit : cover;
        }
`

export const TextContainer = styled.div`
        padding : 1rem 1.2rem;
        display : flex;
        /* height : 100%; */
        flex-direction : column;
        /* justify-content : space-between; */
`

export const Head = styled.p`
        font-size : ${ props => props.size };
        font-weight : 600;
        margin : 0;
        padding : 0;
        color : #14213D;
`

export const Text = styled.p`
        font-size : ${props => props.size || "1.4rem"};
        color : #14213D;
        margin : 0;
`

export const Dot = styled.div`
        width : 0.5rem;
        height : 0.5rem;
        border-radius : 50%;
        background-color : ${props => props.color};
`

export const Flex = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;

        * {
                margin : 0 0.2rem;
        }
`

export const CircularImg = styled.div`
        width : 80px;
        height : 80px;
        margin : 0 auto;
        border-radius : 50%;
        overflow : hidden;

        img {
                width : 100%;
                object-fit : cover;
        }
`