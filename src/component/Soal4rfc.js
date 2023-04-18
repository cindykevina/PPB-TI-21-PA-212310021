import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';



const MyBio = {identity:{npm:212310021 ,firstname: "Cindy", middlename:"Kevina"},
            
                educations:[{ id: 1, school: 'SDN Gang Aut' },
                { id: 2, school: 'SMP Mardi Yuana Bogor' },
                { id: 3, school: 'SMA Budi Mulia Bogor' }],

                mobile_phone: '087771518242',
                email: 'ckevinaaa@gmail.com',
                gender: 'F',
                tall_body: 166,
                weight_body: 58
}

const Soal4rfc = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 2, padding: 15, width: 300 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: "center" }}>MyBio</Text>

                <Text style={{ fontWeight: 'bold' }}>Identity: </Text>
                <Text>NPM               : {MyBio.identity.npm}</Text>
                <Text>First Name     : {MyBio.identity.firstname}</Text>
                <Text>Middle Name : {MyBio.identity.middlename}</Text>

                <Text style={{ fontWeight: 'bold' }}>Educations: </Text>
                {MyBio.educations.map((education) => {
                    return (
                        <Text>{education.id}. {education.school}</Text>
                    )
                })}

                <Text style={{ fontWeight: 'bold' }}>Other: </Text>
                <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
                <Text>Email : {MyBio.email}</Text>
                <Text>Gender : {MyBio.gender}</Text>
                <Text>Tall Body : {MyBio.tall_body}</Text>
                <Text>Weight Body : {MyBio.weight_body}</Text>
                <Text style={{fontWeight:"bold", textAlign:'center'}}>RFC</Text>
            </View>
        </View>
    );
}

export default Soal4rfc;