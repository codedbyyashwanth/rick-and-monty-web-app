import { 
        OuterCard, 
        InnerCard, 
        FrontSide, 
        BackSide,
        ImgContainer, 
        TextContainer, 
        Head, 
        Text,
        Dot,
        Flex,
        CircularImg
} from '../resources/styles/style'


const Card = ({ value }) => {
        const { name, status, image, location, gender, species, episode } = value;
        return (
                <>
                        <OuterCard>
                                <InnerCard id='inner'>
                                        <FrontSide>
                                                <ImgContainer>
                                                        <img src={image} alt="" />
                                                </ImgContainer>
                                        </FrontSide>
                                        <BackSide>
                                                <TextContainer>
                                                        <div style={{ textAlign : "center" }}>
                                                                <CircularImg>
                                                                        <img src={image} alt="" />
                                                                </CircularImg>
                                                                <Head size="1.2rem">{name}</Head>
                                                                <Flex>
                                                                        <Dot color={ status === "Alive" ? "green" : status === "Dead" ?  "red" : "grey" } />
                                                                        <Text size="0.9rem">{status} - {species}</Text>
                                                                </Flex>
                                                        </div>
                                                        <hr style={{ background : "rgba(20, 33, 61, 0.7)", height : "2px", margin : "0.6rem 0" }} />
                                                        <div>
                                                                <Text size="0.9rem"><span style={{ color : "rgba(20, 33, 61, 0.8)", lineHeight : "1.4" }}> Gender: </span>{gender}</Text>
                                                                <Text size="0.9rem"><span style={{ color : "rgba(20, 33, 61, 0.8)", lineHeight : "1.4" }}> Location: </span>{location.name}</Text>
                                                                <Text size="0.9rem"><span style={{ color : "rgba(20, 33, 61, 0.8)", lineHeight : "1.4" }}> Episodes: </span>Appeared in {episode.length} Episodes</Text>
                                                        </div>
                                                </TextContainer>
                                        </BackSide>
                                </InnerCard>
                        </OuterCard>
                </>
        )
}

export default Card