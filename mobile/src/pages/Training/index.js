import React, { useState } from 'react';
import { SafeAreaView, View, Text, ProgressBarAndroid, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import teste from '../../assets/encanamento_agua.png';
import teste2 from '../../assets/bomba_agua.png';
import teste3 from '../../assets/galao_agua.png';
import teste4 from '../../assets/galao_combustivel.png';

const data = [
  {
    title: 'Abastecimento de água potável e combustível',
    image: teste,
    text: 'fkjhaskjdf hskdahfksdakfkashdf',
  },
  {
    title: 'Abastecimento de água potável',
    image: teste2,
    text: '32154312135sadhskdahfksdakfkashdf',
  },
  {
    title: 'Abastecimento de combustível',
    image: teste3,
    text: 'asda65s4fsd23f1343ds1hskdahfksdakfkashdf',
  },
  {
    title: 'Abastecimento de aslkdjsakdjas',
    image: teste4,
    text: '65154653545s4d5s',
  },
]

const Training = () => {
  const route = useRoute();
  const routeParams = route.params;

  
  const progressRate = 1 / data.length;
  const [progressValue, setProgressValue] = useState(0);
  const [currentData, setCurrentDate] = useState({});
  const [currentIndexArray, setCurrentIndexArray] = useState(0);
  
  function handleLeftButton() {
    if (progressValue > 0) {
      setProgressValue(progressValue - progressRate);
      setCurrentIndexArray(currentIndexArray - 1);
    }
  }
  
  function handleRightButton() {
    if (progressValue < 1) {
      setProgressValue(progressValue + progressRate);
      setCurrentIndexArray(currentIndexArray + 1);
      console.log(currentIndexArray);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ProgressBarAndroid
          style={styles.progressBar}
          styleAttr="Horizontal"
          color="#05bae3"
          indeterminate={false}
          progress={progressValue}
        />

      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{data[currentIndexArray].title}</Text>
        <Image source={data[currentIndexArray].image} style={styles.image} />
        <Text style={styles.text}>{data[currentIndexArray].text}</Text>
        {/* <Text style={styles.text}>Oi, {routeParams.cpf}</Text> */}
        {/* <Text style={styles.text}>Sua senha é {routeParams.password}</Text> */}
      </View>

      <View style={styles.footer}>
        {progressValue !== 0 ? (
          <TouchableOpacity style={styles.buttonLeft} onPress={handleLeftButton}>
            <Icon name="left" color="#fff" size={30} />
          </TouchableOpacity>
        ) : (<View></View>)}

        <TouchableOpacity style={styles.buttonRight} onPress={handleRightButton}>
          <Icon name="right" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Training;