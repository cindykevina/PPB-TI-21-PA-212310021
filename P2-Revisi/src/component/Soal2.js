import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { ItemTypograph } from './ItemTypograph';
import { ImageItem } from './ImageItem';

class Soal2 extends Component {
    render() {
        return (
            <View style={{flex : 1 , alignItems : 'center', justifyContent: 'center'}}>

            <ItemTypograph />
            <ImageItem />

            </View>
          
        );
    }
}

export default Soal2;