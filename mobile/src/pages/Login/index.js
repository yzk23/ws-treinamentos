import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleNavigationToTraining() {
    navigation.navigate('Profile');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          value={user}
          style={styles.input}
          placeholder="Usuário"
          onChangeText={setUser}
          maxLength={11}
        />

        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleNavigationToTraining}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;