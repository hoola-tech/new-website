import React, { useState } from "react";

import {
    graphql,
    useStaticQuery,
} from "gatsby";
import Collapsible from "react-collapsible";

import ArrowClosed from "../../../assets/new-homepage/product-overview/arrow-closed.svg";
import ArrowOpen from "../../../assets/new-homepage/product-overview/arrow-open.svg";
import HeadlessCmsVideo
    from "../../../assets/new-homepage/product-overview/headless-cms-preview.mp4";
import PageBuilderVideo from "../../../assets/new-homepage/product-overview/page-builder.mp4";
import PlusIcon from "../../../assets/new-homepage/product-overview/plus.svg";
import {
    AccordionContainer,
    AccordionItemsContainer,
    CollapsibleContainer,
    CollapsibleTriggerContainer,
    H2,
    P,
    PlusImg,
    ProductsOverviewContainer,
} from "./product-overview.styled";

const Trigger = ({ isOpen, title, isComingSoon }) => {
    return (
        <CollapsibleTriggerContainer>
            <img src={isOpen ? ArrowOpen : ArrowClosed} className="arrow-image" alt="arrow" />
            <p className={`collapsible-title ${isOpen ? "collapsible-title-opened" : null}`}>
                {title}
            </p>
            {isComingSoon ? <div className="comming-soon">coming soon</div> : null}
        </CollapsibleTriggerContainer>
    );
};

const AccordionItem = ({
    isOpen,
    accordionPosition,
    onOpenClose,
    title,
    content,
    isComingSoon,
}) => {
    return (
        <CollapsibleContainer
            backgroundColor={isOpen ? "#fef7f4" : "transparent"}
            paddingBottom={isOpen ? "12px" : "0"}
        >
            <Collapsible
                open={isOpen}
                accordionPosition={accordionPosition}
                handleTriggerClick={onOpenClose}
                transitionTime={250}
                transitionCloseTime={100}
                easing={"ease-in-out"}
                trigger={<Trigger isOpen={false} title={title} isComingSoon={isComingSoon} />}
                triggerWhenOpen={
                    <Trigger isOpen={true} title={title} isComingSoon={isComingSoon} />
                }
            >
                <p className="collapsible-content">{content}</p>
            </Collapsible>
        </CollapsibleContainer>
    );
};

const Accordion = ({ accordionItems, openIndex, onOpenClose }) => {
    return (
        <AccordionContainer>
            <AccordionItemsContainer>
                <PlusImg src={PlusIcon} alt="plus" />
                {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        isOpen={index === openIndex}
                        accordionPosition={index}
                        onOpenClose={onOpenClose}
                        title={item.title}
                        content={item.content}
                        isComingSoon={item.isComingSoon}
                    />
                ))}
            </AccordionItemsContainer>
        </AccordionContainer>
    );
};

const ProductOverview = () => {
    const images = useStaticQuery(graphql`
        query ProductOverviewQuery {
            wcpImage: file(relativePath: { eq: "new-homepage/product-overview/wcp.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            apwImage: file(relativePath: { eq: "new-homepage/product-overview/apw-preview.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const accordionItems = [
        {
            title: "Headless CMS",
            content: "Create, organize, distribute and consume your content on any device.",
            video: HeadlessCmsVideo,
            isComingSoon: false,
        },
        {
            title: "Page Builder",
            content:
                "Empower your marketing team to manage a website without the support from your development team.",
            video: PageBuilderVideo,
            isComingSoon: false,
        },
        {
            title: "Hoola AI Control Panel",
            content:
                "Streamline the operations around managing, monitoring and scaling your Hoola AI CMS self-hosted instance.",
            image: images.wcpImage?.childImageSharp.fluid,
            isComingSoon: true,
        },
        {
            title: "Advanced Publishing Workflow",
            content: "Enforce content changes through an approval process before it's published.",
            image: images.apwImage?.childImageSharp.fluid,
            isComingSoon: true,
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const onOpenClose = accordionPosition => {
        setOpenIndex(accordionPosition);
    };

    return (
        <ProductsOverviewContainer>
            <H2>
                Everything an enterprise needs to <br />
                <span>securely manage, analyze, and collaborate</span> on investment insights  at scale
            </H2>
            <P>
            Hoola AI doesn’t just organize your data — it empowers you to create and deploy custom research workflows, manage projects in one place, and enable seamless collaboration across your entire investment team.
            </P>
        </ProductsOverviewContainer>
    );
};

export default ProductOverview;
