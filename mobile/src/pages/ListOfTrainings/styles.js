import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c43',
  },
  
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    paddingLeft: 30,
  },
  
  content: {
    margin: 30,
    marginTop: 40,
    paddingBottom: 20,
    padding: 1
  },

  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginBottom: 20,
  },
  
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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
  },

  list: {
    marginTop: 16,
  },

  itemList: {
    backgroundColor: '#05bae3',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8
  },

  searchBar: {
    backgroundColor: '#fff',
    height: 40,
    width: 300,
    borderRadius: 8,
    padding: 10,
  },

  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});