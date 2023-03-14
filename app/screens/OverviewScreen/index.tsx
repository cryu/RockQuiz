import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { QuizCard } from "./components/QuizCard"
import { TextStyle, View, ViewStyle } from "react-native"
import { Quiz, useStores } from "../../models"
import { Text } from "react-native-paper"

export const OverviewScreen: FC<StackScreenProps<AppStackScreenProps<"Overview">>> = observer(
    function OverviewScreen() {
        // Pull in one of our MST stores
        const { quizStore } = useStores()

        // Pull in navigation via hook
        // const navigation = useNavigation()

        useEffect(() => {
            console.log(quizStore.quizes.length)
            if (quizStore.quizes.length < 10)
                quizStore.add({
                    title: "Test Quiz",
                })
            // quizStore.setProp("quizes", [])
        }, [])

        function removeQuiz(quiz: Quiz) {
            quizStore.remove(quiz)
        }

        return (
            <View style={$container}>
                <Text style={$welcomeHeading}>Welcome to RockQuiz!</Text>

                {quizStore.quizes.map(quiz => (
                    <QuizCard key={quiz.id} quiz={quiz} onRemove={removeQuiz} />
                ))}
            </View>
        )
    },
)

const $container: ViewStyle = {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
}

const $welcomeHeading: TextStyle = {
    marginBottom: spacing.medium,
}
