import { ImageBackground, StyleSheet, View, Image, TextInput,Text, TouchableOpacity,Alert} from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'
import { useState ,useEffect} from 'react';
import pb from '../lib/pocketbase';

const App = ({ navigation }) => {
  const [Gmail, onChangeGmail] = useState('');
  const [Password, onChangePassword] = useState('');

  const Loginhandle = async () => {
    try {
      if (Password.length < 8) {
        Alert.alert("Your password invaild", "Your password more than 8 character.")
        return
      }
      // else {
      //   const userData = await pb.collection('users').authWithPassword(Gmail,Password);
      // }
      navigation.navigate('Search')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../img/BG_page.png")} resizeMode="cover" style={styles.image} >
        <Image source={require("../img/LOGOAPP.png")} style={styles.logo}></Image>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeGmail}
          value={Gmail}
          placeholder="Gmail"
        />
        <TextInput
          style={styles.textinput}
          name="Password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={Password}
          onChangeText={text => onChangePassword(text)}
        />
        <View style={{ alignSelf: 'center' }}>
          <Button
            title="Log in"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#FFFFFF',
              borderWidth: 0,
              borderRadius: 30,
              width: 250,
              height: 65,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "#0E599E" }}
            containerStyle={{
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={Loginhandle}
          />
          <Text style={styles.text}>Forgot Password?</Text>
          <Button
            title="Sign Up"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
              backgroundColor: '#FFFFFF',
              borderWidth: 0,
              borderRadius: 30,
              width: 250,
              height: 65,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "#0E599E" }}
            containerStyle={{
              marginHorizontal: 50,
              marginTop: 30,
              marginBottom: 40
            }}
            onPress={() => navigation.navigate("Register")}
          />
          <Text style={styles.text}>Manus Techaphattrapron</Text>
        </View>
      </ImageBackground>
    </View>
  )
};
const styles = StyleSheet.create({
  box: {
    marginTop: 60,
    width: 260,
    height: 70,
    borderRadius: 30,
    alignSelf: 'center',
    borderWidth: 0,
  },
  textinput: {
    height: 40,
    width: 270,
    borderBottomWidth: 1,
    borderColor: 'rgba(160, 82, 172, 1.0)',
    alignSelf: 'center',
    marginBottom: 40,
    fontSize: 20
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 70,

  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    height: 21,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: 'center',
    borderColor: "white",
    borderBottomWidth: 1,
  },
})

export default App