import React from "react";

import ViewBigTiles from "./view-big-tiles";
import { OrangeText } from "./view-big-tiles.styled";

const DeliveryExcellence = () => {
    return (
        <ViewBigTiles
            tileLink1="/docs/overview/features/site-reliability"
            tileLink2="/docs/overview/applications/apw"
            tileLink3="/docs/overview/features/access-control"
            subTitle="ENTERPRISE-GRADE BY DESIGN"
            title={
                <>
                    <OrangeText>Hoola secures and scales </OrangeText>{" "}
                    workflows with enterprise-grade compliance and performance.
                </>
            }
        />
    );
};
export default DeliveryExcellence;
