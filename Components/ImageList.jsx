import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
const {width} = Dimensions.get('window');

const ImageList = ({images}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image, index) => {
          return (
            <View key={index}>
              <Image
                source={{uri: image.url}}
                style={styles.item}
                resizeMode={'center'}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  item: {
    width: width / 2,
    height: width / 2,
    padding: 4,
  },
});

export default ImageList;
