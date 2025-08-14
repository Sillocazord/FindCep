import axios from "axios";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/botao.jsx";
import { Card } from "../components/card/card.jsx";
import { Input } from "../components/input/input.jsx";


export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [amostradinho, setAmostradinho] = useState(false)

  async function consultarCep(e) {
    e.preventDefault();
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        setJsonCep(resposta.data);
        setAmostradinho(true)
        console.log(jsonCep);
        alert("Obrigado por passar as suas informações para nós, devo avisar que uma equipe de exterminio está indo até sua casa nesse exato momento, você tem aproximadamente 10 minutos para se esconder, tmj!")
      } else {
        alert("MAN, N TA RODANDO NAO VIU")
      }

    } catch (error) {
      console.log(error);

    }
  }



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
          <Input valorCep={cep} onChangeValorCep={e => { setCep(e); console.log(e); }} />

          {/*2.3 Botão*/}
          <Botao tituloBotao="Consultar" onPress={consultarCep}/>
        {amostradinho &&
          <Card
            cep={jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.localidade}
            regiao={jsonCep.regiao}
          />}

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
    gap: 40,

  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: "#000000"
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%'
  }

})