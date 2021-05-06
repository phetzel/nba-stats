import { Platform } from "react-native";

import colors from './colors';

export default {
    splash: {
        fontSize: 50,
        fontFamily: Platform.OS === "android" ? "Monospace" : "HoeflerText-Black",
        marginTop: 100,
        color: colors.black
    }
}