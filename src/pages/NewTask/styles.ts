import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: '#F92E6A',
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#F92E6A',
    alignSelf: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});
