import React from "react";

import BaseLayout from "../../layouts/base";

class ThankYouNewInstall extends React.Component {
    render() {
        return (
            <BaseLayout
                title="THank you"
                description="Thank you for installing your new Hoola AI instance."
            >
                <h1>Thank you!</h1>
                <p>We hope you enjoy using Hoola AI.</p>
            </BaseLayout>
        );
    }
}

export default ThankYouNewInstall;
