import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
const Game = ({ navigation, route }) => {

    // Define the states required for component
    const [p1Win, setP1Win] = useState(0);
    const [p2Win, setP2Win] = useState(0);

    // Add Wins for player on click add win
    const addWin = (number) => {
        if (number == 1) {
            setP1Win(p1Win + 1);
        }
        else {
            setP2Win(p2Win + 1);
        }
    }

    //Common player view for showing win details
    const PlayersView = (player_name, number) => {
        return (
            <View style={Styles.mt30}>
                <View style={[Styles.row ,{ justifyContent: "space-between" }]}>
                    <View>
                        <Text style={Styles.player_name}>{player_name}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={Styles.buttonWrap} onPress={() => addWin(number)}>
                            <Text style={Styles.buttonText}>+ Add Win</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[Styles.row, Styles.center, Styles.mt50]}>
                    <Text style={{ fontSize: 16, color: "gray" }}>Wins: <Text style={{ fontSize: 24, fontWeight: "bold", color: '#000' }}>{number == 1 ? p1Win : p2Win}</Text></Text>
                </View>
            </View>
        )
    }




    return (
        <View style={Styles.wrapper}>
            <View style={Styles.mt30}>
                <Text style={Styles.title}>Add Players Win Details</Text>
            </View>

            <View style={Styles.mt50}>
                {PlayersView(route.params.p1, 1)}
                <View
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.2,
                        marginVertical : 40
                    }}
                />
                {PlayersView(route.params.p2, 2)}
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
        fontSize: 25,
        textAlign: 'center'
    },

    mt30: {
        marginTop: 30
    },

    mt50: {
        marginTop: 50
    },

    buttonWrap: {
        width: 100,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#3ea5f2",
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonText: {
        color: "#3ea5f2",
        fontSize: 16
    },
    row: {
        flexDirection: "row"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    player_name : { 
        fontSize: 22, 
        fontWeight: "500" 
    }
})

// Export Game component
export default Game;