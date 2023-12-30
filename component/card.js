import { StyleSheet, Text, View, Image, ImageBackground,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const card = ({navigation,id,Name, NameProduct,Surname,Price,date}) => {
  return (
    <View style={styles.box}>
                <Text style={styles.TextBoxTopic}>ชื่อผู้โกง:
                <Text style={styles.TextBoxDetail} key="{Name,Surname}">{Name} {Surname}</Text></Text>
                 <Text style={styles.TextBoxTopic}>สินค้าที่โดนโกง:
                <Text style={styles.TextBoxDetail} key="{NameProduct}">{NameProduct}</Text></Text>
                 <Text style={styles.TextBoxTopic}>ราคา:
                <Text style={styles.TextBoxDetail} key="{Price}">{Price} บาท</Text></Text>
                 <Text style={styles.TextBoxTopic}>วันโอนเงิน:
                <Text style={styles.TextBoxDetail} key="{date}">{date}</Text></Text>
    </View>
  )
}
export default card;

const styles = StyleSheet.create({
    box:{
        marginTop:30,
        padding:10,
        width: 310,
        height: 120,
        borderRadius: 3,
        backgroundColor: "#FFFFFF"
    },
    container:{
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
    },
    TextBoxTopic:{
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        color:'#0E599E',
        marginBottom:5,
    },
    TextBoxDetail:{
        color:'#000000'
    },
})