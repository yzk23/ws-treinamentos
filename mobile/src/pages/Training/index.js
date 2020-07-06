import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ProgressBarAndroid, Image, Alert, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import image from '../../assets/encanamento_agua.png';
import image2 from '../../assets/bomba_agua.png';
import image3 from '../../assets/galao_agua.png';
import image4 from '../../assets/galao_combustivel.png';

const data = [
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
    title: 'Abastecimento de óleo',
    image: image4,
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
]

const Training = () => {
  const navigation = useNavigation();

  const progressRate = 1 / (data.length - 1);
  const [progressValue, setProgressValue] = useState(0);
  const [pageData, setPageData] = useState({});
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    setPageData(data[index]);
  }, [index]);
  
  function handleNavigationToQuiz() {
    changeModalVisible();
    navigation.navigate('Quiz');
  }
  
  function handleLeftButton() {
    if (progressValue > 0) {
      setProgressValue(progressValue - progressRate);
    }
    setIndex((index - 1 < 0) ? index : index - 1);
  }

  function handleRightButton() {
    if (progressValue < 1) {
      setProgressValue(progressValue + progressRate);
    }
    setIndex((index + 1 > data.length - 1) ? index : index + 1);

    if (index === data.length - 1) {
      changeModalVisible();
    }
  }

  function changeModalVisible() {
    setModalVisible(!modalVisible);
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
        <Text style={styles.title}>{pageData.title}</Text>
        <Image source={pageData.image} style={styles.image} />
        <Text style={styles.text}>{pageData.text}</Text>
      </View>

      <View style={styles.footer}>
        {progressValue !== 0
          ? (
            <TouchableOpacity
              style={styles.buttonLeft}
              onPress={handleLeftButton}
            >
              <Icon name="left" color="#fff" size={30} />
            </TouchableOpacity>
          )
          : (<View></View>)}

        <TouchableOpacity
          style={styles.buttonRight}
          onPress={handleRightButton}
        >
          <Icon name="right" color="#fff" size={30} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Você deseja fazer o questionário agora?</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#05bae3" }}
                onPress={handleNavigationToQuiz}
              >
                <Text style={styles.textStyle}>Sim</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "red" }}
                onPress={changeModalVisible}
              >
                <Text style={styles.textStyle}>Não</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Training;