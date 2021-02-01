import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const landingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcecee",
    },
    logoView: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    logoSize: {
        width: 95, 
        height: 95,
    },
    appHeadingText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#da2f47",
        marginVertical: 10,
    },
    btnView: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: WIDTH,
        flex: 1,
    }, 
    btnStyle: {
        width: WIDTH * 0.4,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "#da2f47",
    },
    btnText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700",
        color: "#da2f47",
    },
})

export const authScreenStyles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcecee",
        flexDirection: "column",
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    logoSize: {
        width: 75,
        height: 75,
    },
    logoText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#da2f47",
    },
    fieldContainer: {
        marginVertical: 20,
        flexDirection: "column",
    },
    defaultField: {
        width: WIDTH * 0.75,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: "#da2f47",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
    },
    errDefaultField: {
        width: WIDTH * 0.75,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#f00",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
    },
    navigationContainer: {
        position: "absolute",
        bottom: 20,
    },
    navigationText: {
        color: "#999"
    },
    defaultBtn: {
        backgroundColor: "#da2f47",
        alignSelf: "center",
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    defaultBtnText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 17,
    },
})

export const loadingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
})

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
})