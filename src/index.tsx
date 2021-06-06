import React, { ReactElement } from "react";
import { AppBoostrap } from "@components";
import Navigator from "@config/navigator";
import { AndroidSafeArea } from "@utils";
import { SafeAreaView } from "react-native";

export default function App(): ReactElement {
    return (
        <SafeAreaView style={AndroidSafeArea.AndroidSafeArea}>
            <AppBoostrap>
                <Navigator />
            </AppBoostrap>
        </SafeAreaView>
    );
}
