import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as firebase from 'firebase';
import { db } from '../../services/config'

import styles from './styles';
import logo from '../../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function Sign() {
    db.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result != "") {
          handleNavigationToTraining()
        }
      })
      .catch(error => {
        if (error.code == "auth/user-not-found") {
          return Alert.alert(
            "Usuário não cadastrado",
          )
        }
      })
  }

  function handleNavigationToTraining() {
    navigation.navigate('Training', {
      email,
      password
    });
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