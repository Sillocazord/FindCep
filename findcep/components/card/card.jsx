import { StyleSheet, Text, View } from "react-native"
export const Card = () => {
    return (
        <>
        {/* showsVerticalScrollIndicator={false */}
            <View style={styles.card}>

            <View>
                <Text style = {styles.tituloValor}>CEP</Text>
                <Text style = {styles.valor}>Dado 01</Text>
            </View>

            <View>
                <Text style = {styles.tituloValor}>Logadouro</Text>
                <Text style = {styles.valor}>Dado 02</Text>
            </View>

            <View>
                <Text style = {styles.tituloValor}>Bairro</Text>
                <Text style = {styles.valor}>Dado 03</Text>
            </View>

            <View>
                <Text style = {styles.tituloValor}>UF</Text>
                <Text style = {styles.valor}>Dado 04</Text>
            </View>

            <View>
                <Text style = {styles.tituloValor}>Estado</Text>
                <Text style = {styles.valor}>Dado 05</Text>
            </View>

            <View>
                <Text style = {styles.tituloValor}>Região</Text>
                <Text style = {styles.valor}>Dado 06</Text>
            </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "70%",
        minHeight: '54%',
        padding: 20,
         borderRadius: 7,
        //MEU JEITINHO HHIHIHIHIHI
        boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        gap: 20
       
        //JEITO DA PROFESSORA
        // shadowColor: '#b2b2b2ff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2,
        // borderRadius: 7
    },
    tituloValor: {
        fontWeight: 600,
    }

})
