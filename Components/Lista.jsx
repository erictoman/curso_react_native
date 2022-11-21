import {ScrollView, View, StyleSheet, Alert} from 'react-native';
import Item from './Item';
import {getRandomNames} from '../Utils/RandomData';

let listaItems = getRandomNames();

const Lista = ({setActivo}) => {
  const clicked = data => {
    //Alert.alert('Clicked', data);
    setActivo(true);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        {listaItems.map(item => {
          return <Item onClick={clicked} nombre={item.nombre} key={item.id} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Lista;
