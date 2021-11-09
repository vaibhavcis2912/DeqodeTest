import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

const Home = ({ navigation }) => {
    // Define the states required for component
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    // Common input field for text input
    const InputField = (label) => {
        return (
            <View style={Styles.mt30}>
                <Text>{`Player ${label} name`}</Text>
                <TextInput onChangeText={(value) => {
                    if (label == 1) {
                        setPlayer1(value.trim())
                    }
                    else {
                        setPlayer2(value.trim())
                    }
                }} style={[Styles.mt5, Styles.input]} />
            </View>
        )
    }

    // Continue button click handled
    const handleSubmit = () => {
        if (player1 != '' && player2 != '') {
            navigation.navigate('Game', { p1: player1, p2: player2 })
        }
    }

    return (
        <View style={Styles.wrapper}>
            <View style={Styles.mt30}>
                <Text style={Styles.title}>Enter player details to continue</Text>
            </View>
            <View style={Styles.mt30}>
                {InputField(1)}
                {InputField(2)}
            </View>
            <View style={Styles.mt30}>
                <TouchableOpacity onPress={() => handleSubmit()} style={[Styles.buttonWrap, Styles.mt30, {}]}>
                    <Text style={Styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

//Styles for component
const Styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 40,
        paddingTop: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    mt5: {
        marginTop: 5
    },
    mt15: {
        marginTop: 15
    },
    mt30: {
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        color: '#000000'
    },
    buttonWrap: {
        width: 300,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#3ea5f2"
    },
    buttonText: {
        color: "#fff",
        fontSize: 18
    }
})

// Export Home component
export default Home;