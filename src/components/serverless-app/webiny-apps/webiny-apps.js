import React, { Fragment } from "react";

import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
// styles
import {
    HeroSection,
    containerClass,
    WebinyHallMarkImage,
    Wrapper,
    Title,
    SubTitle,
    FeatureWrapper,
    FeatureCard,
    ServerlessApp,
    ExploreAppsSection,
    ExploreAppsTitle,
    ExploreAppsTitleHighlight,
    ExploreAppsSubTitle,
    ContributeTitle,
    ContributeSection,
    ContributeTitleWrapper,
    contributeClass,
    ServerlessBenefitsSection,
    ServerlessBenefitTitle,
    ServerlessBenefitTitleHighlight,
    ServerBenefitsWrapper,
    BenefitBox,
    serverlessAppsRTLClass,
} from "./webiny-apps-styles";

// assets
import webinyBg from "./assets/webiny-group.svg";
import ovalImg from "./assets/oval.svg";

// data
import { FEATURES, APPS, BENEFITS } from "./webiny-apps-data";

export const WebinyAppsServerlessBenefits = () => (
    <ServerlessBenefitsSection>
        <ContentContainer className={containerClass}>
            <Wrapper>
                <ServerlessBenefitTitle>
                    All Hoola AI Apps Get the Full Spectrum of{" "}
                    <ServerlessBenefitTitleHighlight>
                        Serverless Benefits
                    </ServerlessBenefitTitleHighlight>{" "}
                    Out of the Box
                </ServerlessBenefitTitle>
            </Wrapper>
            <ServerBenefitsWrapper>
                {BENEFITS.map(benefit => (
                    <BenefitBox
                        key={benefit.id}
                        {...benefit}
                        data-aos={"zoom-in"}
                        data-aos-once="true"
                    >
                        <img src={benefit.imgSrc} alt={benefit.imgAlt} className="benefit__img" />
                        <h3 className="benefit__title">{benefit.title}</h3>
                    </BenefitBox>
                ))}
            </ServerBenefitsWrapper>
        </ContentContainer>
    </ServerlessBenefitsSection>
);

const WebinyApps = props => {
    return (
        <Fragment>
            <HeroSection {...props}>
                <ContentContainer className={containerClass}>
                    <WebinyHallMarkImage src={webinyBg} alt={""} />
                    <Wrapper>
                        <Title>Speed up the delivery time even more with Hoola AI apps!</Title>
                        <SubTitle>
                            On top of being a serverless development framework, Hoola AI also comes
                            with several FREE ready-made apps.
                        </SubTitle>
                    </Wrapper>
                    <FeatureWrapper>
                        {FEATURES.map(feature => (
                            <FeatureCard key={feature.id} {...feature}>
                                <img
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                    className="card__img"
                                />
                                <h4 className="card__title">{feature.title}</h4>
                                <p className="card__body">{feature.body}</p>
                            </FeatureCard>
                        ))}
                    </FeatureWrapper>
                </ContentContainer>
            </HeroSection>
            <ExploreAppsSection>
                <ContentContainer className={containerClass}>
                    <Wrapper>
                        <ExploreAppsTitle>
                            Explore Hoola AI{" "}
                            <ExploreAppsTitleHighlight>Serverless Apps</ExploreAppsTitleHighlight>
                        </ExploreAppsTitle>
                        <ExploreAppsSubTitle>
                            Whether you are looking for a Headless CMS solution, ways to build
                            stunning landing pages, create forms or manage files, Hoola AI apps will
                            provide you with an out of the box solution and allow you to start
                            building your serverless project straight away.
                        </ExploreAppsSubTitle>
                    </Wrapper>
                    {APPS.map((app, index) => (
                        <ServerlessApp
                            key={app.id}
                            className={index % 2 !== 0 ? serverlessAppsRTLClass : ""}
                            imgSrc={app.imgSrc}
                        >
                            <div className="text-content">
                                <h3 className="text-content__title">
                                    <span>{app.keyword}</span>&nbsp;{app.title}
                                </h3>
                                <p className="text-content__body">{app.body}</p>
                                <div className="text-content__action">
                                    <Button
                                        className={"button"}
                                        type={"secondary"}
                                        link={app.actionLink}
                                    >
                                        {app.actionLabel}
                                    </Button>
                                </div>
                            </div>
                            <div className="media-content">
                                <img src={ovalImg} alt="" className="media-content__img-bg" />
                                <div
                                    className="media-content__img"
                                    data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
                                    data-aos-duration={600}
                                    data-aos-once="true"
                                />
                            </div>
                        </ServerlessApp>
                    ))}
                </ContentContainer>
            </ExploreAppsSection>
            <ContributeSection>
                <ContentContainer className={contributeClass}>
                    <ContributeTitleWrapper>
                        <ContributeTitle>Interested in contributing an app?</ContributeTitle>
                        <Button
                            className={"button"}
                            type={"secondary"}
                            link={"mailto:sven@hoola.ai"}
                        >
                            Get in touch
                        </Button>
                    </ContributeTitleWrapper>
                </ContentContainer>
            </ContributeSection>
            <WebinyAppsServerlessBenefits />
        </Fragment>
    );
};
export default WebinyApps;
