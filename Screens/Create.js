import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'
import { Logs } from 'expo';
import pb from '../lib/pocketbase';
import { launchImageLibraryAsync } from "expo-image-picker";
const Create = ({ navigation }) => {
    const [Bank, onChangeBank] = React.useState('');
    const [BankName, onChangeBankname] = React.useState(''); //
    const [Idcard, onChangeIdcard] = React.useState('');
    const [Name, onChangeName] = React.useState(''); //
    const [Surname, onChangeSurname] = React.useState(''); //
    const [PhoneNum, onChangePhoneNum] = React.useState('');
    const [NameProduct, onChangeNameProduct] = React.useState(''); //
    const [Price, onChangePrice] = React.useState(''); //
    const [date, onchangeDate] = React.useState('');  //
    const [ImageDetail, onChnageImageDetail] = React.useState('');
    const [navOpen, OnChangenavOpen] = React.useState(false);

    const areInputsFilled = () => {
        const result =
            BankName.trim() !== '' &&
            Name.trim() !== '' &&
            Surname.trim() !== '' &&
            NameProduct.trim() !== '' &&
            Price.trim() !== '' &&
            date.trim() !== '';
        console.log('areInputsFilled result:', result);
        return result;
    }
    const CreatePost = async () => {
        try {
            // bank length = 10 
            // IDcard length=13
            if (areInputsFilled() == true) {
                if (Bank.length != 0 && Bank.length < 10) {
                    Alert.alert('Your Bank number Invaild', 'Please try again')
                    return;
                }
                if (Idcard.length != 0 && Idcard.length < 13) {
                    Alert.alert('Your IDcard Invaild', 'Please try again')
                    return;
                }
                //   const ImageDetail = OpenLib();
                const data = {
                    "BankName": BankName,
                    "Name": Name,
                    "Surname": Surname,
                    "NameProduct": NameProduct,
                    "Price": Price,
                    "date": date,
                    "Bank": Bank,
                    "Idcard": Idcard,
                    "PhoneNum": PhoneNum,
                    // "ImageDetail":ImageDetail,
                };
                console.log(data);
                await pb.collection('Post').create(data);
                navigation.navigate("Search");
            } else{
                Alert.alert('Your filed have empty in topic *','Please try again')
            }
        } catch (e) {
            if (e instanceof ClientResponseError) {
                console.log("Server error:", e.response.status, e.response.data);
            } else {

                console.log("Unexpected error:", e);
            }
        }
    }
    const OpenLib = async () => {
        const result = await launchImageLibraryAsync();
        onChnageImageDetail(result);
        console.log(result);
        return result;
    }
    return (
        <>
            <ImageBackground source={require("../img/BG_page.png")} style={styles.ImageBackground}>
                <View style={styles.container}>
                    {!navOpen && (<TouchableOpacity style={styles.Profile} onPress={() => OnChangenavOpen(true)}>
                        <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                    </TouchableOpacity>
                    )}
                    {navOpen && (<TouchableOpacity style={styles.Profile} onPress={() => OnChangenavOpen(false)}>
                        <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                    </TouchableOpacity>
                    )}
                    {navOpen && (
                        <View style={styles.MenuContainer}>
                            <TouchableOpacity style={styles.Menu} onPress={() => navigation.navigate("Profile") || OnChangenavOpen(false)}>
                                <Text style={styles.Textbox}>
                                    โปรไฟล์
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Menu} onPress={() => navigation.navigate("Login") || OnChangenavOpen(false)}>
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
                            placeholder="เลขบัญชีธนาคาร" />
                        <Text style={styles.HeadInput}>
                            ธนาคาร/แอปที่โอนเงิน*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeBankname}
                            value={BankName}
                            placeholder="ชื่อบัญชีธนาคาร" />
                        <Text style={styles.HeadInput}>
                            บัตรประชาชน
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeIdcard}
                            value={Idcard}
                            placeholder="00-0000-000-00" />
                        <Text style={styles.HeadInput}>
                            ชื่อ*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeName}
                            value={Name}
                            placeholder="มนัส" />
                        <Text style={styles.HeadInput}>
                            นามสกุล*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeSurname}
                            value={Surname}
                            placeholder="ไม่รู้ๆ" />
                        <Text style={styles.HeadInput}>
                            เบอร์โทร
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangePhoneNum}
                            value={PhoneNum}
                            placeholder="000-000-0000" />
                        <Text style={styles.HeadInput}>
                            สินค้าที่โดนโกง*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeNameProduct}
                            value={NameProduct}
                            placeholder="ชื่อสินค้า" />
                        <Text style={styles.HeadInput}>
                            ราคา(บาท)*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangePrice}
                            value={Price}
                            placeholder="ราคา" />
                        <Text style={styles.HeadInput}>
                            วันที่โอนเงิน*
                        </Text>
                        <TextInput style={styles.TextInput}
                            onChangeText={onchangeDate}
                            value={date}
                            placeholder="วันโอนเงิน Ex.01/12/2566" />
                        <TouchableOpacity style={styles.ImageAdd} onPress={OpenLib}>
                            <Image source={require('../icon/Image_icon.png')} />
                            <Text style={styles.HeadImage}>เพิ่มรูปภาพ</Text>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <Button
                                title="สร้างโพสต์"
                                buttonStyle={{
                                    alignSelf: 'center',
                                    width: 150,
                                    height: 50,
                                    borderRadius: 30,
                                    backgroundColor: "#FFB800"
                                }}
                                titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "#0E599E" }}
                                onPress={CreatePost}
                            />
                        </View>
                        <View style={{ height: 80 }}></View>
                    </ScrollView>
                </View>
                <View style={styles.navbar}>


                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <Image source={require("../icon/Search.png")} style={styles.IconNavAdd}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Recent")}>
                        <Image source={require("../icon/Recent.png")} style={styles.IconNavRecent}></Image>
                    </TouchableOpacity>
                    <Button
                        title="สร้าง"
                        buttonStyle={{
                            marginLeft: 20,
                            padding: 0,
                            width: 110,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: "#FFE500"
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "#0E599E" }}
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
        position: 'relative',
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
        width: 250,
        height: 29,
        fontWeight: "700",
        fontSize: 20,
        marginLeft: 30,
        color: "#0E599E"
    },
    HeadImage: {
        fontWeight: "700",
        fontSize: 20,
        color: "#0E599E",
        textAlign: 'center',
    },
    TextInput: {
        width: 250,
        marginLeft: 30,
        marginBottom: 15,
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
    navbar: {
        flexDirection: 'row',
        position: 'absolute',
        paddingTop: 20,
        bottom: 0,
        left: 0,
        right: 0,
        width: 420,
        height: 70,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 1)"
    },
    Profile: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        top: 15,
    },
    ImageAdd: {
        width: 200,
        height: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
    },

    IconNavRecent: {
        marginLeft: 85,
        marginRight: 45,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    IconNavAdd: {
        marginLeft: 60,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    MenuContainer: {
        zIndex: 1,
        position: 'absolute',
        right: 20,
        top: 80,
        height: 60,
        width: 110,
    },
    Menu: {
        backgroundColor: '#F3F0F0',
        height: 40,
        width: 110,
    },
    Textbox: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#0E599E"
    }
})