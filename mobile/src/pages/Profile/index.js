import React from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Profile = () => {
  const navigation = useNavigation();

  function handleNavigationToTraining() {
    navigation.navigate('ListOfTrainings');
  }

  function handleNavigationToQuiz() {
    navigation.navigate('Quiz');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Icon style={styles.image} name="user-circle" color="#05bae3" size={130} />

        <Text style={styles.name}>Fulano</Text>

        <TouchableOpacity style={styles.button} onPress={handleNavigationToTraining}>
          <Text style={styles.text}>Treinamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNavigationToQuiz}>
          <Text style={styles.text}>Questionários</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profile;