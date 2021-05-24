import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./game.styles";

const Game = (): ReactElement => {
    return (
        <View style={styles.container}>
            <Text>Game!!</Text>
        </View>
    );
};

export default Game;
