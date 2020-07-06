import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';

import styles from './styles';

const Congratulations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.content}>
        <Text style={styles.text}>Parabéns</Text>

        <Icon size={300} name="Trophy" color='gold' style={styles.icon} />

        <Text style={{...styles.text, fontSize: 40 }}>Você acertou 3 questões!!</Text>
      </View>

      <View style={styles.footer}></View>

    </SafeAreaView>
  );
}

export default Congratulations;