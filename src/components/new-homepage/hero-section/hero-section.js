import React from "react";

import advantageIcon1 from "../../../assets/new-homepage/hero/advantage-icon-1.svg";
import advantageIcon2 from "../../../assets/new-homepage/hero/advantage-icon-2.svg";
import advantageIcon3 from "../../../assets/new-homepage/hero/advantage-icon-3.svg";
import advantageIcon4 from "../../../assets/new-homepage/hero/advantage-icon-4.svg";
import advantageIcon5 from "../../../assets/new-homepage/hero/advantage-icon-5.svg";
import aiIcon from "../../../assets/new-homepage/hero/ai.svg";
import iconArrow from "../../../assets/new-homepage/hero/icon-arrow.svg";
import leftLines from "../../../assets/new-homepage/hero/left-lines.svg";
import linesDesktop from "../../../assets/new-homepage/hero/lines.svg";
import rightLines from "../../../assets/new-homepage/hero/right-lines.svg";
import {
    AdvantagesContainer,
    AdvantagesContainerMobile,
    AdvantageTileImage,
    AdvantageTileStyle,
    AdvantageTileTitle,
    ButtonPrimary,
    HeroContainer,
    HeroSection,
    ImageArrow,
    LinesImageDesktop,
    LinesImageMobile,
    RequestLink,
    SubTitle,
    Title,
} from "./hero.styled";

const AdvantageTile = ({ image, title }) => {
    return (
        <AdvantageTileStyle>
            <AdvantageTileImage src={image} />
            <AdvantageTileTitle>{title}</AdvantageTileTitle>
        </AdvantageTileStyle>
    );
};

const HeroComponent = ({
    buttonTopLink = "/pricing",
    buttonBottomLink,
    title,
    subTitle,
    buttonTopLabel,
    buttomBottomLabel,
}) => {
    return (
        <HeroSection>
            <HeroContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <div style={{ paddingTop: "2rem" }}>
                    <AdvantageTile image={aiIcon} title="" />
                </div>
                <LinesImageDesktop src={linesDesktop} />
                <AdvantagesContainerMobile>
                    <LinesImageMobile src={leftLines} />
                    <AdvantagesContainer>
                        <AdvantageTile image={advantageIcon1} title="Unstructured Data" />
                        <AdvantageTile image={advantageIcon2} title="Structured Data" />
                        <AdvantageTile image={advantageIcon3} title="API Integration" />
                        <AdvantageTile image={advantageIcon4} title="Website Contents" />
                        <AdvantageTile image={advantageIcon5} title="Realtime Search" />
                    </AdvantagesContainer>
                    <LinesImageMobile src={rightLines} />
                </AdvantagesContainerMobile>
                <ButtonPrimary link={buttonTopLink} type={"primary"}>
                    {buttonTopLabel}
                </ButtonPrimary>
                <RequestLink target="_blank" href={buttonBottomLink}>
                    {buttomBottomLabel} <ImageArrow src={iconArrow} />
                </RequestLink>
            </HeroContainer>
        </HeroSection>
    );
};

export default HeroComponent;
