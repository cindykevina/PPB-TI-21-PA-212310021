import React from 'react';
import {Text, View} from "react-native";

var name = "Honda";
const Motorcycle = () => {
    return (
        <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 200}}>Hi, Im a Motorcycle</Text>
                <Text style={{marginTop: 50}}>Merek : {name}</Text>
                <Text style={{marginTop: 50}}>Type : {types.type}</Text>
                <Text style={{marginTop: 50}}>Model : {types.model}</Text>
                <Text style={{marginTop: 50}}>Harga : {types.harga}</Text>
            </View>
    );
};

export default Motorcycle;
const types = {type:"Matic", model:"Vario", harga:1500000};
