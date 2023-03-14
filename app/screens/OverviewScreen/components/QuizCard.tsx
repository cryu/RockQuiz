import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../../../theme"
import { Button, Card } from "react-native-paper"
import { Quiz } from "../../../models"

export interface QuizCardProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>
    quiz: Quiz
    onRemove: (quiz: Quiz) => void
}

/**
 * Describe your component here
 */
export const QuizCard = observer(function QuizCard(props: QuizCardProps) {
    const { style, quiz, onRemove } = props
    const $styles = [$container, style]

    return (
        <View style={$styles}>
            <Card style={$text} mode="contained">
                <Card.Title title={quiz.title}></Card.Title>
                <Card.Actions>
                    <Button onPress={() => onRemove(quiz)}>Delete</Button>
                </Card.Actions>
            </Card>
        </View>
    )
})

const $container: ViewStyle = {
    justifyContent: "center",
}

const $text: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: 14,
    color: colors.palette.primary500,
}
