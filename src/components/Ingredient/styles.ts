import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: theme.colors.gray_200,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: 16,
        height: 42,
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },
    image:{
        width: 16,
        height: 16,
    },
    title: {
        fontFamily: theme.fonts.family.medium,
        fontSize: theme.fonts.size.body.sm,
    },
    selected:{
        borderWidth: 2,
        borderColor: theme.colors.green_600,
        backgroundColor: theme.colors.green_100,
    }
    });