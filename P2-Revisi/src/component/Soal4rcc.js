import React, { Component } from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


class Soal4rcc extends Component {

    constructor(props) {
        super(props);
        this.state = { identity:{npm:212310021 ,firstname: "Cindy",middlename:"Kevina"},
                
        educations:[{ id: 1, school: 'SDN Gang Aut' },
                    { id: 2, school: 'SMP Mardi Yuana Bogor' },
                    { id: 3, school: 'SMA Budi Mulia Bogor' }],
    
         mobile_phone: '087771518242',
         email: 'ckevinaaa@gmail.com',
         gender: 'F',
         tall_body: 166,
         weight_body: 58
           
        }
    }
    


    render() {
        return (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderWidth: 2, padding: 15, width: 300 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: "center" }}> MyBio </Text>
            <Text style={{ fontWeight: 'bold' }}>Identity:</Text>
            <Text>NPM               : {this.state.identity.npm}</Text>
            <Text>First Name     : {this.state.identity.firstname}</Text>
            <Text>Middle Name : {this.state.identity.middlename}</Text>

            <Text style={{ fontWeight: 'bold' }}>Educations:</Text>
            {this.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}

            <Text style={{ fontWeight: 'bold' }}>Other:</Text>
            <Text>Mobile Phone : {this.state.mobile_phone}</Text>
            <Text>Email : {this.state.email}</Text>
            <Text>Gender : {this.state.gender}</Text>
            <Text>Tall Body : {this.state.tall_body}</Text>
            <Text>Weight Body : {this.state.weight_body}</Text>

            <Text style={{textAlign : 'center' }}>RCC</Text>
        </View>
    </View> );
    }
}

export default Soal4rcc;