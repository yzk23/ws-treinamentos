import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { db } from '../../services/config'

import styles from './styles';
import logo from '../../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleNavigationToTraining() {
    navigation.navigate('Profile');
  }

  function Sign() {
    db.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = db.auth().currentUser
        if (result != "") {
          handleNavigationToTraining(user)
        }
      })
      .catch(error => {
        if (error.code == "auth/user-not-found") {
          return Alert.alert("Email não cadastrado")
        } else if (error.code == "auth/invalid-email") {
          return Alert.alert("Formato incorreto ou campos não preenchidos")
        } else if (error.code == "auth/wrong-password") {
          return Alert.alert("A senha está incorreta")
        }
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          keyboardType='email-address'
        />

        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={Sign}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
