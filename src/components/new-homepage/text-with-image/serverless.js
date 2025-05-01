import React from "react";

import {
    graphql,
    useStaticQuery,
} from "gatsby";
import styled from "react-emotion";

import TextWithImage from "./text-with-image";
import {
    Bold,
    Highlight,
} from "./text-with-image.styled";

const Background = styled("div")({
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9FFFE 100%)",
    borderBottom: "1px solid #E4F2F0",
});

const Serverless = () => {
    const image = useStaticQuery(graphql`
        query ServerlessQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/query.png" }) {
                childImageSharp {
                    fluid(maxWidth: 650, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Background>
            <TextWithImage
                isLeftImage
                image={image.file.childImageSharp.fluid}
                subtitle="Smart Query Engine"
                title={
                    <>
                        <Highlight>Ask complex questions</Highlight> and get insights instantly.
                    </>
                }
                arrowLink="#"
                // arrowLink="/docs/overview/features/serverless-infrastructure"
                arrowTitle=""
            >
                No more digging through <Bold>folders or toggling between spreadsheets.</Bold> With
                Hoola’s natural language interface, you can ask{" "}
                <Bold>specific, nuanced questions</Bold> and receive <Bold>structured, explainable answers </Bold>
                sourced directly from your 
                <Bold> connected data.</Bold>
            </TextWithImage>
        </Background>
    );
};

export default Serverless;
