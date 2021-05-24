import React, { ReactElement } from "react";
import { AppBoostrap } from "@components";
import Navigator from "@config/navigator";

export default function App(): ReactElement {
    return (
        <AppBoostrap>
            <Navigator />
        </AppBoostrap>
    );
}
