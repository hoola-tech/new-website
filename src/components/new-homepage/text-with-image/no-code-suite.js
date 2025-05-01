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
    borderBottom: "1px solid #FAF0F3",
});

const NoCodeSuite = () => {
    const image = useStaticQuery(graphql`
        query NoCodeSuiteQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/workspace.png" }) {
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
                image={image.file.childImageSharp.fluid}
                subtitle="Collaborative Workspace"
                title={
                    <>
                        <Highlight>Empower teams </Highlight> to annotate, explore, and co-create
                        investment theses.
                    </>
                }
                // arrowLink="/docs/overview/features/nocode-suite"
                arrowLink="#"
                arrowTitle=""
            >
                Research is a team sport. Hoola’s collaboration layer enables analysts, PMs, and
                associates to <Bold>work together </Bold> — tagging documents, adding comments,
                saving searches, and building shared views of insights. Whether your team is in one
                office or spread across global desks, everyone stays aligned, informed, and able to
                contribute to high-conviction decisions. properties.
            </TextWithImage>
        </Background>
    );
};

export default NoCodeSuite;
