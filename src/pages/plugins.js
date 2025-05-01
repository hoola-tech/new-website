import React from "react";

import BaseLayout from "../layouts/base";
import Plugins from "../components/plugins/plugins.js";

class PluginPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Hoola AI Plugins"
                description="Hoola AI plugin repository. Find the right plugin for your Hoola AI serverless website."
            >
                <Plugins />
            </BaseLayout>
        );
    }
}

export default PluginPage;
