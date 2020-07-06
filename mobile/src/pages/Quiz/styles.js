import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c43',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20 + Constants.statusBarHeight,
  },
  
  footer: {
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginTop: 5,
  },
  
  content: {
    flex: 0.9,
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 20,
  },

  question: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },

  option: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 3
  },

  checkbox: {
    color: 'white'
  },

  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },

  questionCard: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginTop: 5,
    padding: 15
  },

  button: {
    backgroundColor: '#277D1E',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: 150,
  },

});