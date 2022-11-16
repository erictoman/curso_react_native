import {View, StyleSheet, Text, Pressable} from 'react-native';

const Item = ({nombre}) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.3 : 1.0}]}
      onLongPress={() => {
        alert('Long Press');
      }}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.circle}></View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
            {nombre}
          </Text>
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.itemText}>Next</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  itemLeft: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 5,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: 'red',
  },
  itemText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Item;
