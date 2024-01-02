import { StyleSheet, Text, View,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from '@rneui/themed';
import pb from '../lib/pocketbase';
const Profile = ({navigation}) => {
    const [Name, onChangeName] = React.useState('');
    const [Twitter,onChangeTwitter] = React.useState('');
    const [Facebook,onChangeFacebook] = React.useState('');
    const [Edit,onChangeEdit] = React.useState(true);
    const InputsFilled = () => {
        const result =
            Name.trim() !== '' ||
            Twitter.trim() !== '' ||
            Facebook.trim() !== '';
        return result;
    };
    useEffect(() => {
        const Profile = async () => {
            try {
                const record = await pb.collection('users').getOne('6yer5gcd9ljfm5u', {
                    expand: 'relField1',
                });
                if (record) {
                    const { Facebook, username, Twitter } = record;
                    onChangeName(username)
                    onChangeFacebook(Facebook)
                    onChangeTwitter(Twitter)
                } else {
                    console.log('Record not found');
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        Profile();
    }, []); 
    
    
    const updateProfile = async () => {
        try {
            if (InputsFilled()) {
                const data = {};
                
                // Add conditions for each TextInput field with a value
                if (Facebook.trim() !== '') {
                    data.Facebook = Facebook;
                }
                if (Name.trim() !== '') {
                    data.Username = Name;
                }
                if (Twitter.trim() !== '') {
                    data.Twitter = Twitter;
                }
                // Update the user record only if there is any data to update
                if (Object.keys(data).length > 0) {
                    const recordId = '6yer5gcd9ljfm5u'; // Replace with the actual record ID
                    const record = await pb.collection('users').update(recordId, data);
                    console.log(data);
                } else {
                    console.log('No data to update.');
                }
            }
            onChangeEdit(true);
        } catch (e) {
            console.log(e);
        }
        
    };
    
  return (
    <>
        <ImageBackground source={require("../img/BG_page.png")} style={styles.ImageBackground}>
        <View style={styles.container}>
        <TouchableOpacity  style= {styles.IconBack} onPress={()=> navigation.goBack()}>
            <Image source={require("../icon/BackButton.png")} style={{width:55,height:55}}/>
        </TouchableOpacity>
            <Text style={styles.Topic}>
            Profile
            </Text>
            <View style={styles.Line}></View>
            <Image source={require("../icon/Profile_icon_big.png")} style= {styles.Profile}/>
            <View style={styles.box}>
            {Edit && (
                <Text style={styles.Textbox}>
                ชื่อ : {Name} 
                </Text>
            )}
            {Edit && (
                <Text style={styles.Textbox}>
                เฟสบุ๊ค : {Facebook}
                </Text>
            )}
            {Edit && (
                <Text style={styles.Textbox}>
                ทวิตเตอร์ : {Twitter}   
                </Text>
                )}
                {Edit && (
                <View style={styles.container}>
                <Button
                    title="แก้ไข"
                    buttonStyle={{
                        marginTop:82,
                        width: 150,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: "red"
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23,color: "#FFFFFF"}}
                    onPress={() => onChangeEdit(false)}
                    />
                </View>
                )}
                {!Edit && (
                <TextInput style={styles.TextInput}
                                onChangeText={onChangeName}
                                value={Name}
                                placeholder={Name}/>
            )}
            {!Edit && (
                <TextInput style={styles.TextInput}
                                onChangeText={onChangeFacebook}
                                value={Facebook}
                                placeholder={Facebook}/>
            )}
            {!Edit && (
                <TextInput style={styles.TextInput}
                                onChangeText={onChangeTwitter}
                                value={Twitter}
                                placeholder={Twitter}/>
            )}
            {!Edit && (
                <View style={styles.container}>
                <Button
                    title="เสร็จสิ้น"
                    buttonStyle={{
                        marginTop:82,
                        width: 150,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: "#FFB800"
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23,color: "#FFFFFF"}}
                    containerStyle={{
                                    position:'absolute',
                                    top:7,
                                }}
                    onPress={() =>updateProfile()}
                    />
                </View>
            )}
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity  onPress={()=> navigation.navigate("Search")}>
                    <Image source={require("../icon/Search.png")} style={styles.IconNav}></Image> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Recent")}>
                        <Image source={require("../icon/Recent.png")} style={styles.IconNavRecent}></Image>
                    </TouchableOpacity>
                <Image source={require("../icon/add.png")} style={styles.IconAdd}></Image>
            </View>
        </View> 
        </ImageBackground>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
    ImageBackground:{
        alignContent: 'center',
        flex: 1
    },
    container: {
        position:'relative',
        alignItems: 'center'
    },
    IconBack:{
        width:60,
        height:60,
        position:'absolute',
        left:10,
        top:30,
    },
    navbar:{
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
    IconNav:{
        marginLeft: 50,
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
    Line: { 
        width: 73,
        height: 0,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "rgba(160, 82, 172, 1.0)"
    },
    Profile:{
        marginBottom:5,
        marginTop:5,
        width:195,
        height:195,
    },
    box:{
        position:'relative',
        width: 342,
        height: 325,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
    },
    Textbox:{
        marginTop:35,
        marginLeft:20,
        fontSize: 20,
        fontWeight: "500",
    },
    TextInput: {
        width: 250,
        marginTop:31,
        marginLeft:30,
        fontSize: 20,
        fontWeight: "500",
        borderBottomWidth: 1,
        borderColor: 'rgba(160, 82, 172, 1.0)',
    },
    IconNavRecent: {
        marginLeft: 90,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    },
    IconAdd:{
        marginLeft: 90,
        bottom: 0,
        right: 0,
        left: 0,
        width: 40,
        height: 40,
    }
})