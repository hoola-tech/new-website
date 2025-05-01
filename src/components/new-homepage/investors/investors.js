import React from "react";

import {
    Container,
    ContentSection,
    H3,
    InvestorsImage,
    InvestorsSection,
    StatsCount,
    StatsSection,
    StatsText,
} from "./investors.styled";

const Stats = ({ count, text }) => {
    return (
        <StatsSection className="stats-section">
            <StatsCount>{count}</StatsCount>
            <StatsText>{text}</StatsText>
        </StatsSection>
    );
};

const Investors = () => {
    return (
        <Container>
            <ContentSection>
                <InvestorsSection>
                    <H3>Integrate with the Leading LLM Models</H3>
                    <InvestorsImage>
                        <img src={"https://cdn.prod.website-files.com/67598e3b5398bca2b6ec80d7/67a1f254f906a0c5047b4c1f_openAI.svg"} alt="icon next" />
                        <img src={"https://cdn.prod.website-files.com/67598e3b5398bca2b6ec80d7/67a1f25cb010e0ebe990da27_VertexAI.svg"} alt="icon y" />
                        <img src={"https://cdn.prod.website-files.com/67598e3b5398bca2b6ec80d7/67a1f263c6d739e86f9ef391_Anthropic.svg"} alt="icon episode 1" />
                        <img src={"https://cdn.prod.website-files.com/67598e3b5398bca2b6ec80d7/67a1f26af6eb56ae25b5eb4f_AWS.svg"} alt="icon episode 1" />
                        <img src={"https://registry.npmmirror.com/@lobehub/icons-static-png/1.45.0/files/dark/deepseek-text.png"} alt="icon episode 1" />
                    </InvestorsImage>
                    </InvestorsSection>
            </ContentSection>
        </Container>
    );
};

export default Investors;
