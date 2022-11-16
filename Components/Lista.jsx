import { ScrollView, View, StyleSheet } from "react-native"
import Item from "./Item"
import { getRandomNames } from "../Utils/RandomData"

let listaItems = getRandomNames()

const Lista = () => {
    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View
            style={
                styles.container
            }>
            {listaItems.map((item) => {
                return <Item nombre={item.nombre} key={item.id} />
            })}
        </View>
    </ScrollView>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Lista