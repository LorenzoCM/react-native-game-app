import React, { useState, ReactElement } from "react";
import { SafeAreaView } from "react-native";
import { GradientBackground, Board } from "@components";
import styles from "./single-player-game-styles";
import {
    printFormattetBoard,
    isEmpty,
    isFull,
    getAvailableMoves,
    BoardState,
    isTerminal
} from "@utils";

const Game = (): ReactElement => {
    const [state, setState] = useState<BoardState>([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]);

    const handleOnCellPressed = (cell: number): void => {
        const stateCopy: BoardState = [...state];
        if (stateCopy[cell] || isTerminal(stateCopy)) return;
        stateCopy[cell] = "x";
        setState(stateCopy);
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    disabled={Boolean(isTerminal(state))}
                    onCellPressed={cell => {
                        handleOnCellPressed(cell);
                    }}
                    state={state}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
};

export default Game;
