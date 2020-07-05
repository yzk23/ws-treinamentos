import React from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

import image from '../../assets/encanamento_agua.png';
import image2 from '../../assets/bomba_agua.png';
import image3 from '../../assets/galao_agua.png';
import image4 from '../../assets/galao_combustivel.png';

const trainings = [
  {
    title: 'Treinamento 1',
    steps: [
      {
        title: 'Abastecimento de água potável e combustível',
        image: image,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
      },
      {
        title: 'Abastecimento de água potável',
        image: image2,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia',
      },
      {
        title: 'Abastecimento de combustível',
        image: image3,
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem',
      },
      {
        title: 'Abastecimento de aslkdjsakdjas',
        image: image4,
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      },
    ]
  },
  {
    title: 'Treinamento 2',
    steps: [
      {
        title: 'dfkjndsjfsjdfaasdfsdlfskdjf',
        image: image4,
        text: 'shfsdfk sdf hsdkfsdkfh sadjsakdsakdsal',
      }
    ]
  },
  {
    title: 'Treinamento 3',
  },
  {
    title: 'Treinamento 4',
  },
  {
    title: 'Treinamento 5',
  },
  {
    title: 'Treinamento 6',
  },
  {
    title: 'Treinamento 7',
  },
  {
    title: 'Treinamento 8',
  },
  {
    title: 'Treinamento 9',
  },
  {
    title: 'Treinamento 10',
  },
  {
    title: 'Treinamento 11',
  },
  {
    title: 'Treinamento 12',
  },
  {
    title: 'Treinamento 13',
  },
  {
    title: 'Treinamento 14',
  },
  {
    title: 'Treinamento 15',
  },
];

const ListOfTrainings = () => {
  const navigation = useNavigation();

  function handleNavigationToTraining(training) {
    navigation.navigate('Training', training);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Treinamentos</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Filtro" />
          <Icon name="search" size={16} color="#fff" />
        </View>

        <FlatList
          style={styles.list}
          data={trainings}
          keyExtractor={training => training.title}
          renderItem={({ item: training }) => (
            <TouchableOpacity style={styles.itemList} onPress={() => handleNavigationToTraining(training)}>
              <Text style={styles.text}>{training.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default ListOfTrainings;