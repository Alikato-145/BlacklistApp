import { ImageBackground, StyleSheet, View, Text, Image, TextInput, SafeAreaView, Alert } from 'react-native'
import { Button } from '@rneui/themed';
import pb from '../lib/pocketbase'
import React from 'react'
import ClientResponseError from 'pocketbase'

function Register({ navigation }) {
  const [Username, onChangeUsername] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [Gmail, onChangeGmail] = React.useState('');
  const [PasswordCon, onChangePasswordCon] = React.useState('');

  const Regis = async () => {
    try {
      const data = {
        "username": Username,
        "email": Gmail,
        "password": Password,
        "passwordConfirm": PasswordCon,
      };
      console.log(data);
      await pb.collection('users').create(data);
      navigation.navigate("Login");
    } catch (e) {
      if (e instanceof ClientResponseError) {
        console.log("Server error:", e.response.status, e.response.data);
      } else {

        console.log("Unexpected error:", e);
      }
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../img/BG_page.png")} resizeMode="cover" style={styles.container}  >
        <Image source={require("../img/LOGOAPP.png")} style={styles.logo}></Image>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeUsername}
          value={Username}
          placeholder="Username"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeGmail}
          value={Gmail}
          placeholder="Gmail"
        />
        <TextInput
          style={styles.textinput}
          name="Password"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={Password}
          onChangeText={text => onChangePassword(text)}
        />
        <TextInput
          style={styles.textinput}
          name="Confirm Password"
          placeholder="Confirm password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={PasswordCon}
          onChangeText={text => onChangePasswordCon(text)}
        />
        <View style={{ alignSelf: 'center' }}>
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
              marginBottom: 10
            }}
            onPress={Regis}
          />
          <Text style={styles.text}>Manus Techaphattrapron</Text>
        </View>
      </ImageBackground>
    </View>
  )
};
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 40,
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
  textinput: {
    height: 40,
    width: 270,
    borderBottomWidth: 1,
    borderColor: 'rgba(160, 82, 172, 1.0)',
    alignSelf: 'center',
    marginBottom: 40,
    fontSize: 20
  },
})

export default Register