import React, { Component } from 'react';
import {Stylesheet, Text, View} from "react-native";

class Car extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 100}}>Hi, Im a Car</Text>
            </View>
        );
    }
}

export default Car;