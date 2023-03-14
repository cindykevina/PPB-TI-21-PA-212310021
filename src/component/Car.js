import React, { Component } from 'react';
import {Stylesheet, Text, View} from "react-native";

export default class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            merek : "Toyota",
            types : {type : "Matic", model : "Calya ADS"}
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 100}}>Hi, Im a Car</Text>
                <Text style={{marginTop: 50}}>Merek : {this.state.merek}</Text>
                <Text style={{marginTop: 50}}>Type : {this.state.types.type}</Text>
                <Text style={{marginTop: 50}}>Model : {this.state.types.model}</Text>
            </View>
        );
    }
}
