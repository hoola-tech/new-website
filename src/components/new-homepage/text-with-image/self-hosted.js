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
    TextContainer,
} from "./text-with-image.styled";

const Background = styled("div")({
    borderBottom: "1px solid #FAF0F3",
});

const SelfHosted = () => {
    const image = useStaticQuery(graphql`
        query SelfHostedQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/self-hosted.png" }) {
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
                image={image.file?.childImageSharp.fluid}
                subtitle="Unified Data Environment"
                title={
                    <TextContainer>
                        <Highlight>Securely connect</Highlight> your data.
                    </TextContainer>
                }
                arrowLink="#"
                // arrowLink="/docs/overview/features/self-hosted"
                arrowTitle=""
            >
                Break down data silos with a <Bold>centralized environment</Bold> that integrates
                your proprietary reports, Excel models, CRM notes, emails, and market feeds. Hoola
                AI allows your team to search, analyze, and extract insights from all sources —
                securely and in one place. Whether it's archived PDFs or live datasets, everything
                becomes instantly accessible and query-ready.
            </TextWithImage>
        </Background>
    );
};

export default SelfHosted;
