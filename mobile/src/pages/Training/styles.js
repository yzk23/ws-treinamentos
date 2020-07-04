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
    marginTop: 15
  },

  image: {
    width: 400,
    height: 300,
  }
})