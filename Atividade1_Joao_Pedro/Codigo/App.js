import React from 'react';
import{Text, StyleSheet, View} from 'react-native';

//const titulo = "flexGrow"

export default function App(){
  return<View style={estilos.primary}>
            <View style={estilos.primeirasecao}>
              <Text style={estilos.textSessao1}>Atividade 1</Text>
              <Text style={estilos.textSessao1}>João Pedro D'Agostin</Text>
              <Text style={estilos.textSessao1}>2020101518</Text>
              <Text style={estilos.textSessao1}>16 de setembro de 2022</Text>
            </View>
            <View style={estilos.segundasecao}>
              <View style={estilos.quadradoVermelho}></View>
              <View style={estilos.quadradoVerde}></View>
              <View style={estilos.quadradoAzul}></View>
            </View>
        </View>
};

const estilos= StyleSheet.create({
  primary:{
    flex:1
  },
  primeirasecao: {
    backgroundColor: 'white',
    flex: 1
  },
  textSessao1: {
    color: 'black',
    top: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22
  },
  segundasecao:{
    backgroundColor: '#EEE',
    flex:1
  },
  quadradoVermelho:{
    backgroundColor: '#A20202',
    width: 50, 
    height: 50,
    position: 'absolute',
    top: 200,
    left: 150,
    zIndex: 1
  },
  quadradoVerde:{
    backgroundColor: '#02FA2F',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 200,
    left: 140,
    zIndex:2
  },
  quadradoAzul:{
    backgroundColor: '#00AAFF',
    width: 50,
    height:50,
    position: 'absolute',
    top: 240,
    left: 150,
    zIndex: 0
  }

  });