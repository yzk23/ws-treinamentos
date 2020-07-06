import React, { useState } from 'react';
import { View, SafeAreaView, Text, CheckBox } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const questions = [
  {
    id: 1,
    question: 'Quem roeu a roupa do rei de Roma?',
    options: [
      'Rato',
      'Rei',
      'Roma',
    ]
  },
  {
    id: 2,
    question: 'Onde é que tem dois sete, dois zeros?',
    options: [
      '7700',
      '2720',
      '2700',
      '7720',
    ]
  },
  {
    id: 3,
    question: 'Num avião havia há 4 romanos e 1 inglês. Qual o nome da aeromoça?',
    options: [
      'Maria',
      'Letícia',
      'Ivone',
      'Luiza',
    ]
  },
  {
    id: 4,
    question: 'O pai do padre é o único filho do meu pai, o que o padre é meu?',
    options: [
      'Irmão',
      'Tio',
      'Pai',
      'Filho',
    ]
  },
  {
    id: 5,
    question: 'O que a mãe da sogra da esposa do seu irmão é minha?',
    options: [
      'Tia',
      'Mãe',
      'Irmã',
      'Avó',
    ]
  },
];

const Quiz = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Congratulations');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.content}>
        <FlatList
          data={questions}
          keyExtractor={question => String(question.id)}
          renderItem={({ item: question }) => (

            <View style={styles.questionCard}>
              <Text style={styles.question}>{question.question}</Text>
              {question.options.map(option => (
                <View key={option} style={styles.checkboxContainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    // onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                    style={styles.checkbox}
                  />

                  <Text style={styles.option}>{option}</Text>
                </View>
              ))}
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <View />

        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.question}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Quiz;