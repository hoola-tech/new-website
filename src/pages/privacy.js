import React from "react";

import PrivacyPolicy from "../components/static/privacy";
import BaseLayout from "../layouts/base";

class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Privacy Policy"
                description="Privacy Policy and Cookie Policy for Hoola AI platform."
            >
                <PrivacyPolicy />
            </BaseLayout>
        );
    }
}

export default PrivacyPolicyPage;
