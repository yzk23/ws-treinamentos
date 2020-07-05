import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c43',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#05bae3',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: 330
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  image: {
    marginBottom: 10,
  },

  name: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 50,
    fontWeight: 'bold'
  },
});