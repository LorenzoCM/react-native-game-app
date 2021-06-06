import React, { ReactElement } from "react";
import { ScrollView, View, Image } from "react-native";
import styles from "./home.styles";
import { GradientBackground, Button } from "@components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

const Home = ({ navigation }: HomeProps): ReactElement => {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@assets/logo.png")} />
                <View style={styles.buttons}>
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="Single Player"
                    />
                    <Button style={styles.button} title="Multiplayer" />
                    <Button style={styles.button} title="Login" />
                    <Button style={styles.button} title="Settings" />
                </View>
            </ScrollView>
        </GradientBackground>
    );
};

export default Home;
