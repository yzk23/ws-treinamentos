import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c43',
    justifyContent: 'space-between'
  },
  
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20 + Constants.statusBarHeight,
  },
  
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    paddingBottom: 20
  },

  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginBottom: 20,
  },
  
  progressBar: {
    width: 330,
  },
  
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  
  buttonLeft: {
    backgroundColor: '#05bae3',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: 60,
  },
  
  buttonRight: {
    backgroundColor: '#05bae3',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: 60,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center'
  },

  image: {
    width: 400,
    height: 300,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 150,
    width: 300
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // height: 100,
    width: 100
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
})