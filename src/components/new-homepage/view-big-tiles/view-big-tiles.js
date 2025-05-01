import React from "react";

import iconTile1 from "../../../assets/new-homepage/view-tiles/icon-tile-1.svg";
import iconTile2 from "../../../assets/new-homepage/view-tiles/icon-tile-2.svg";
import iconTile3 from "../../../assets/new-homepage/view-tiles/icon-tile-3.svg";
import iconTile4 from "../../../assets/new-homepage/view-tiles/icon-tile-4.svg";
import {
    SubTitle,
    TileBorder,
    TileDescription,
    TileStyle,
    TileTitle,
    Title,
    ViewBigTilesContainer,
    ViewTileWrapper,
} from "./view-big-tiles.styled";

const BigTile = ({ title, description, image, link }) => {
    return (
        <TileBorder>
            <TileStyle>
                <img src={image} alt="" />
                <div>
                    <TileTitle>{title}</TileTitle>
                    <TileDescription>{description}</TileDescription>
                    {/* <TileLink target="_blank" href={link}>
                        Learn more
                        <img src={iconArrow} alt="" />
                    </TileLink> */}
                </div>
            </TileStyle>
        </TileBorder>
    );
};

const ViewBigTiles = ({ tileLink1, tileLink2, tileLink3, subTitle, title }) => {
    return (
        <ViewBigTilesContainer>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <ViewTileWrapper>
                <BigTile
                    title="Multi-Tenant Architecture"
                    description="Safeguard sensitive information with built-in tenant isolation. Hoola ensures complete data separation across teams, departments, and clients—enabling firms to manage multiple portfolios or business lines securely from a single platform without risk of data leakage."
                    image={iconTile4}
                    link={tileLink1}
                />
                <BigTile
                    title="Customizable AI Agents"
                    description="Fine-tune our AI to understand your firm's proprietary language, sector-specific terms, and internal frameworks. You can train models on past research notes, internal rating methodologies, or custom financial templates to enhance relevance and accuracy."
                    image={iconTile2}
                    link={tileLink2}
                />
                <BigTile
                    title="Enterprise Integrations"
                    description="Easily connect to your existing tech stack—whether it’s cloud-based or on-premise. Hoola integrates with data vendors, document stores, CRMs, and other critical tools, ensuring smooth workflows across your organization."
                    image={iconTile3}
                    link={tileLink3}
                />
                <BigTile
                    title="Scalable & Compliant Infrastructure"
                    description="Run on infrastructure that scales with your team and adheres standards. Hoola is built with SOC2 readiness, encryption in transit and at rest, audit logging, and access controls to meet enterprise security and compliance requirements."
                    image={iconTile1}
                    link={tileLink3}
                />
            </ViewTileWrapper>
        </ViewBigTilesContainer>
    );
};

export default ViewBigTiles;
