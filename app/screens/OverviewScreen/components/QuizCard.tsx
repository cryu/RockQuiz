import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../../../theme"
import { Text } from "../../../components/Text"
import { Card } from "react-native-paper"

export interface QuizCardProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const QuizCard = observer(function QuizCard(props: QuizCardProps) {
    const { style } = props
    const $styles = [$container, style]

    return (
        <View style={$styles}>
            <Card style={$text}>
                <Card.Title title="Norbert vs Bonnes"></Card.Title>
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
