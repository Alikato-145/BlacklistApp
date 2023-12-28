import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'
import { Logs } from 'expo';

const Create = ({ navigation }) => {
    const [Bank, onChangeBank] = React.useState('');
    const [Backname, onChangeBankname] = React.useState('');
    const [Idcard, onChangeIdcard] = React.useState('');
    const [Name, onChangeName] = React.useState('');
    const [Surname, onChangeSurname] = React.useState('');
    const [PhoneNum, onChangePhoneNum] = React.useState('');
    const [navOpen,OnChangenavOpen] = React.useState(false);
    return (
        <>
            <ImageBackground source={require("../img/BG_page.png")} style={styles.ImageBackground}>
                <View style={styles.container}>
                {!navOpen && (<TouchableOpacity  style ={styles.Profile}onPress={()=>OnChangenavOpen(true)}>
                 <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                </TouchableOpacity>
                )}
                {navOpen && (<TouchableOpacity  style ={styles.Profile}onPress={()=>OnChangenavOpen(false)}>
                 <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                </TouchableOpacity>
                )}
                 {navOpen && (
                    <View style={styles.MenuContainer}>
                <TouchableOpacity  style ={styles.Menu} onPress={()=>navigation.navigate("Profile")||OnChangenavOpen(false)}>
                <Text style={styles.Textbox}>
                โปรไฟล์ 
                </Text>
                </TouchableOpacity>
                <TouchableOpacity  style ={styles.Menu} onPress={()=>navigation.navigate("Login")||OnChangenavOpen(false)}>
                    <Text style={styles.Textbox}>
                    ออกจากระบบ 
                    </Text>
                    </TouchableOpacity>
                    </View>
            )}      
                    <Text style={styles.Topic}>โพสต์</Text>
                    <View style={styles.Line}></View>
                    <ScrollView style={styles.box}>
                        <Text style={styles.HeadInput}>
                        เลขบัญชีธนาคาร
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangeBank}
                                value={Bank}
                                placeholder="เลขบัญชีธนาคาร"/>
                        <Text style={styles.HeadInput}>
                        ธนาคาร
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangeBankname}
                                value={Backname}
                                placeholder="ชื่อบัญชีธนาคาร"/>
                        <Text style={styles.HeadInput}>
                        บัตรประชาชน
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangeIdcard}
                                value={Idcard}
                                placeholder="00-0000-000-00"/>
                        <Text style={styles.HeadInput}>
                        ชื่อ
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangeName}
                                value={Name}
                                placeholder="มนัส"/>
                        <Text style={styles.HeadInput}>
                        นามสกุล
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangeSurname}
                                value={Surname}
                                placeholder="ไม่รู้ๆ"/>
                        <Text style={styles.HeadInput}>
                        เบอร์โทร
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangePhoneNum}
                                value={PhoneNum}
                                placeholder="000-000-0000"/>
                        <Text style={styles.HeadInput}>
                        สินค้าที่โดนโกง
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangePhoneNum}
                                value={PhoneNum}
                                placeholder="ชื่อสินค้า"/>
                        <Text style={styles.HeadInput}>
                        ราคา(บาท)
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangePhoneNum}
                                value={PhoneNum}
                                placeholder="ราคา"/>
                        <Text style={styles.HeadInput}>
                        วันที่โอนเงิน
                        </Text>
                        <TextInput style={styles.TextInput}
                                onChangeText={onChangePhoneNum}
                                value={PhoneNum}
                                placeholder="วันโอนเงิน Ex.01/12/2566"/>
                        <View style={styles.container}>
                            <Button
                                title="สร้างโพสต์"
                                buttonStyle={{
                                    width: 150,
                                    height: 50,
                                    borderRadius: 30,
                                    backgroundColor: "#FFB800"
                                }}
                                titleStyle={{ fontWeight: 'bold', fontSize: 23,color: "#0E599E"}}
                                onPress={() => console.log("Hello world")}
                                />
                        </View>
                        <View style={{height:40}}></View>
                    </ScrollView>
                </View>
                <View style={styles.navbar}>
        
               
                <TouchableOpacity  onPress={()=> navigation.navigate("Search")}>
                <Image source={require("../icon/Search.png")} style={styles.IconNavAdd}></Image>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate("Recent")}>
                    <Image source={require("../icon/Recent.png")} style={styles.IconNavRecent}></Image>
                </TouchableOpacity>
                <Button
                                title="สร้าง"
                                buttonStyle={{
                                    marginLeft:20,
                                    padding:0,
                                    width: 110,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: "#FFE500"
                                }}
                                titleStyle={{ fontWeight: 'bold', fontSize: 23,color: "#0E599E"}}
                                onPress={() => console.log("Hello world")}
                                />
                </View>
            </ImageBackground>
        </>
    )
}

export default Create

const styles = StyleSheet.create({
    ImageBackground: {
        alignContent: 'center',
        flex: 1
    },
    container: {
        position:'relative',
        alignItems: 'center'
    },
    Topic: {
        marginTop: 60,
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#0E599E"

    },
    Line: {
        width: 310,
        height: 0,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "rgba(160, 82, 172, 1.0)"
    },
    box: {
        paddingTop: 30,
        padding: 10,
        width: 342,
        height: 560,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
    },
    HeadInput: {
        width: 167,
        height: 29,
        fontWeight: "700",
        fontSize: 20,
        marginLeft: 30,
        color: "#0E599E"
    },
    TextInput: {
        width: 250,
        marginLeft: 30,
        marginBottom:15,
        paddingTop: 10,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(160, 82, 172, 1.0)',
    },
    ButtonSubmit: {
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FFB800"
    },
    navbar:{
        flexDirection:'row',
        position:'absolute',
        paddingTop:20,
        bottom:0,
        left:0,
        right:0,
        width: 420,
        height: 70,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 1)"
    },
    Profile:{
        position:'absolute',
        width:50,
        height:50,
        right:10 ,
        top:15,
    },
    IconNavRecent:{
        marginLeft:85,
        marginRight:45,
        bottom:0,
        right:0,
        left:0,
        width:40,
        height:40,
    },
    IconNavAdd:{
        marginLeft:60,
        bottom:0,
        right:0,
        left:0,
        width:40,
        height:40,
    },
    MenuContainer:{
        zIndex: 1,
        position:'absolute',
        right:20,
        top:80,
        height:60,
        width:110,
    },
    Menu:{
        backgroundColor:'#F3F0F0',
        height:40,
        width:110,
    },
    Textbox:{
        marginLeft:5,
        marginTop:5,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#0E599E"
    }
})