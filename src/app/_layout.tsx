import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen"

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    SplashScreen.hideAsync()

    return (
        <>
            <StatusBar style="dark" />
            <Slot />
        </>
    )
}