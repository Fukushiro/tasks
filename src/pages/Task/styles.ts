import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)``;

export const TextStyle = styled(Text)``;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  buttonNewTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: '#f92e6a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  iconButton: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contextAllTasks: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  deleteTask: {
    justifyContent: 'center',
    paddingLeft: 15,
  },

  DescriptionTask: {
    width: '75%',
    alignContent: 'flex-start',
    backgroundColor: '#f5f5f5cf',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: '#282b2db5',
  },
});
