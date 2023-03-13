import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { Button } from "react-native-paper"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const OverviewScreen: FC<StackScreenProps<AppStackScreenProps<"Overview">>> = observer(
    function OverviewScreen() {
        // Pull in one of our MST stores
        // const { someStore, anotherStore } = useStores()

        // Pull in navigation via hook
        // const navigation = useNavigation()
        return (
            <View style={$container}>
                <Text style={$welcomeHeading}>Welcome to RockQuiz!</Text>
                <Button icon="camera" mode="contained" onPress={() => console.log("Pressed")}>
                    Press me
                </Button>
            </View>
        )
    },
)

const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
}

const $welcomeHeading: TextStyle = {
    marginBottom: spacing.medium,
}
