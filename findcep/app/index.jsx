
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/botao.jsx";
import { Card } from "../components/card/card.jsx";
import { Input } from "../components/input/input.jsx";

export default function Index() {
  return (
    <>
      {/*1. Logo + imagem de fundo*/}
      <ImageBackground source={require('../assets/images/image2.png')}
        style={styles.imgFundo}>

        <Image source={require('../assets/images/Group5.png')} style={styles.logo}></Image>

      </ImageBackground>
 
        {/*2. Campo de consulta*/}
        <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>

          {/*2.1 Título*/}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          {/*2.2 Input*/}
          <Input />

          {/*2.3 Botão*/}
          <Botao tituloBotao="Consultar" />

          <Card />

        </View>
</ScrollView>
    </>
  );
}

// ------------Estilos dos meus componentes--------------
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    gap: 40
  },
  titulo: {
    fontSize: 25,
    fontFamily: 'poppins',
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%'
  }

})