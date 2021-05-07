import { Platform } from "react-native";

import colors from './colors';

export default {
    splash: {
        fontSize: 50,
        fontFamily: Platform.OS === "android" ? "Monospace" : "HoeflerText-Black",
        marginTop: 100,
        color: colors.black
    },
    title: {
        fontSize: 30,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontWeight: '700',
        color: colors.black
    },
    listItem: {
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.black
    },   
}