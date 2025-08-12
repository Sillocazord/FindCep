
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/botao.jsx";
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
      <View style={styles.container}>

        {/*2.1 Título*/}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/*2.2 Input*/}
        <Input />

        {/*2.3 Botão*/}
        <Botao tituloBotao = "Me da roblox"/>

      </View>

    </>
  );
}

//Estilos dos meus componentes
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
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25,
    fontFamily: 'poppins',
  }
})