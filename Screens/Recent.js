import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Button } from '@rneui/themed';
import React, { useEffect } from 'react'
import Card from '../component/card';
import Detail from './Detail';
import pb from '../lib/pocketbase';

const Recent = ({ navigation }) => {
    const [Items, onChangeItems] = React.useState([]);
    const [navOpen, OnChangenavOpen] = React.useState(false);
    useEffect(() => {
        const Post = async () => {
            const records = await pb.collection('Post').getFullList({
                sort: '-created',
            });
            const ImageAll = await pb.collection('Image').getFullList({
                sort: '-created',
            });
            console.log(ImageAll);
            onChangeItems([...records])
        }
        Post();
    });

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
                    <Text style={styles.Topic}>
                        โพสต์ล่าสุด
                    </Text>
                    <View style={styles.Line}></View>
                    <ScrollView>
                        {Items.map(({ id, Name, Surname, date, NameProduct, Price, BankName, Bank, Idcard, PhoneNum}) => (
                            <TouchableOpacity
                                key={id} // Add a unique key prop here
                                onPress={() =>
                                    navigation.navigate("Detail", { id, Name, Surname, date, NameProduct, Price, BankName, Bank, Idcard, PhoneNum })
                                }
                            >
                                <Card key={id} id={id} Name={Name} Surname={Surname} date={date} NameProduct={NameProduct} Price={Price} />
                            </TouchableOpacity>
                        ))}
                        <View style={{ height: 200 }}></View>
                    </ScrollView>


                    <View style={styles.navbar}>
                        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                            <Image source={require("../icon/Search.png")} style={styles.IconNavSearch}></Image>
                        </TouchableOpacity>
                        <Button
                            title="ค้นหา"
                            buttonStyle={{
                                marginLeft: 55,
                                padding: 0,
                                width: 110,
                                height: 40,
                                borderRadius: 40,
                                backgroundColor: "#FFE500"
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "#0E599E" }}
                            onPress={() => console.log("Hello world")}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                            <Image source={require("../icon/add.png")} style={styles.IconNav}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default Recent

const styles = StyleSheet.create({
    ImageBackground: {
        alignContent: 'center',
        flex: 1
    },
    container: {
        position: 'relative',
        alignItems: 'center'
    },
    navbar: {
        alignContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        paddingTop: 20,
        top: 620,
        bottom: 0,
        left: 0,
        right: 0,
        width: 420,
        height: 75,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 1)"
    },
    IconNav: {
        marginLeft: 70,
        marginRight: 10,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    Topic: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#0E599E"

    },
    IconNavSearch: {
        marginLeft: 55,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    IconNavAdd: {
        marginLeft: 90,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    Topic: {
        height: 35,
        marginTop: 50,
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#0E599E"
    },
    Line: {
        width: 110,
        height: 0,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "rgba(160, 82, 172, 1.0)"
    },
    box: {
        marginTop: 30,
        padding: 10,
        width: 310,
        height: 120,
        borderRadius: 3,
        backgroundColor: "#FFFFFF"
    },
    TextBoxTopic: {
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        color: '#0E599E',
        marginBottom: 5,
    },
    TextBoxDetail: {
        color: '#000000'
    },
    Profile: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        top: 15,
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