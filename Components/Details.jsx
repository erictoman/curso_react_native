import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import left from '../assets/left.png';
import down from '../assets/down.png';
import Colors from '../Utils/Colors';

const Details = () => {
  return (
    <View style={styles.alineacion}>
      <View style={styles.columnas}>
        <View style={styles.barraSuperior}>
          <View style={styles.izquierda}>
            <Image source={left}></Image>
          </View>
          <View>
            <Text style={styles.centro}>Enviar dinero a</Text>
          </View>
          <View style={styles.derecha}></View>
        </View>
        <View>
          <View style={styles.avatar}></View>
        </View>
        <View style={styles.containerInfo}>
          <Text>Eric Uriel Trejo Trejo</Text>
          <Text>2222 **** **** 2222</Text>
          <Text>$ 320.00</Text>
          <Text>No fee</Text>
        </View>
        <View style={styles.cuentas}>
          <View>
            <Text>Elige tu cuenta</Text>
          </View>
          <View style={styles.selector}>
            <View style={styles.iconoCuenta}></View>
            <View>
              <Text>**** 3456</Text>
              <Text>Balance: $ 530.00</Text>
            </View>
            <View style={styles.iconoSelector}>
              <Image source={down}></Image>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Text>Enviar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alineacion: {
    flex:1,
    justifyContent:"space-between"
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
    color: Colors.white,
  },
  iconoSelector: {
    marginLeft: 10,
  },
  selector: {
    marginVertical: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
  },
  cuentas: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconoCuenta: {
    width: 40,
    height: 40,
    backgroundColor: Colors.gray,
    marginRight: 5,
  },
  columnas: {
    alignItems: 'center',
  },
  barraSuperior: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  izquierda: {
    flex: 1,
  },
  derecha: {
    flex: 1,
  },
  centro: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerInfo: {
    marginVertical: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    marginVertical: 40,
    backgroundColor: Colors.gray,
    borderRadius: 64,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default Details;
