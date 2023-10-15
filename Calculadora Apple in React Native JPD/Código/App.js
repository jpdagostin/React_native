 
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

let estados={
  valorTela:'',
  resultado: '',
  operado: false,
  ponto: false,
}

export default function App() {

  const [valorTela, setValorTela]=useState(estados.valorTela)
  const [valorResult, setValorResult]=useState(estados.resultado)

  const adicionarDigito=(digito)=>{
    if(digito == '+' || digito == '*' || digito == '-' || digito == '/'){
    estados.ponto=false
    }
    if(digito == '.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    }
    else if(digito == '.' && estados.ponto){
      return
    }
    if((digito == '+' || digito == '*' || digito == '-' || digito == '/') && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }
    estados.valorTela = estados.valorTela + digito
    setValorTela(estados.valorTela)
    setValorResult(estados.resultado)
    estados.operado=false
     
    //const ValorDigitado = estados.valorTela
  }

  const limparTela=()=>{
    estados={
      valorTela:'',
      resultado: '',
      operado: false,
      ponto: false,
    }
    setValorTela(estados.valorTela)
    setValorResult(estados.resultado)
  }

  const functionOperation=(digito)=>{
    if(digito == 'C'){
      limparTela()
      return
    }
    try{
      estados.resultado=eval(estados.valorTela)
      estados.operado=true
      setValorResult(estados.resultado)
    }catch{
      estados.resultado='Erro!'
      estados.operado=true
      setValorResult(estados.resultado)
    }

  }
  
  return (
   <SafeAreaView style={styles.container}>
    <Text 
      style={styles.txtName}>
      Nome: João Pedro D'Agostin - RA: 2020101518
    </Text>

    <TextInput
    style={styles.display1}
    value={String(valorTela)}
    onChangeText={(texto)=>{setValorTela(texto)}}
    >
    </TextInput>

    <TextInput
    style={styles.display2}
    value={String(valorResult)}
    onChangeText={(texto)=>{setValorResult(texto)}}
    >
    </TextInput>
          <View style={styles.buttonsOperViewCeX}>
            <TouchableOpacity style={styles.buttonsOperC}
              onPress={()=>{functionOperation('C')}}
            >
              <Text style={styles.txtBtnOPC}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsOper}
              onPress={()=>{adicionarDigito('/')}}
            >
              <Text style={styles.txtBtnOP}>/</Text>
            </TouchableOpacity>
            </View>
    <View style={styles.btnsOrdem}>

            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('7')}}
            >
              <Text style={styles.txtBtnOP}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('4')}}
            >
              <Text style={styles.txtBtnOP}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('1')}}
            >
              <Text style={styles.txtBtnOP}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('8')}}
            >
              <Text style={styles.txtBtnOP}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('5')}}
            >
              <Text style={styles.txtBtnOP}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('2')}}
            >
              <Text style={styles.txtBtnOP}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('9')}}
            >
              <Text style={styles.txtBtnOP}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('6')}}
            >
              <Text style={styles.txtBtnOP}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('3')}}
            >
              <Text style={styles.txtBtnOP}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsOper}
            onPress={()=>{adicionarDigito('*')}}
            >
              <Text style={styles.txtBtnOPX}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsOper}
            onPress={()=>{adicionarDigito('-')}}
            >
              <Text style={styles.txtBtnOP}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsOper}
            onPress={()=>{adicionarDigito('+')}}
            >
              <Text style={styles.txtBtnOP}>+</Text>
            </TouchableOpacity>

      </View>
      <SafeAreaView style={styles.container2}>

      <View style={styles.btnsOrdem}>
            <TouchableOpacity style={styles.buttonsOperZero}
            onPress={()=>{adicionarDigito('0')}}
            >
              <Text style={styles.txtBtnOPZero}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsNumber}
            onPress={()=>{adicionarDigito('.')}}
            >
              <Text style={styles.txtBtnOP}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsOper}
            onPress={()=>{functionOperation('=')}}
            >
              <Text style={styles.txtBtnOP}>=</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex: 1
},
  container2:{
  backgroundColor:'black',
  flex: 0.35,
  marginTop: -15
},
  display1:{
  backgroundColor: 'black',
  padding: 25,
  color: 'white',
  fontSize: 25,
  textAlign: 'right',
  paddingRight: 40
},
  display2:{
  backgroundColor: 'black',
  color: 'white',
  fontSize: 77,
  textAlign: 'right',
  paddingRight:30
},
  txtBtnOP:{
  color: 'white',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 40,
},
  txtBtnOPZero:{
  color: 'white',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  fontSize: 40,
  marginLeft: 30
},
  txtBtnOPC:{
      color: 'black',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 40,
      marginLeft: 30
  },
  txtBtnOPX:{
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 40,
    marginTop: 15
},
btnsOrdem:{
  flex: 1,
  flexWrap: 'wrap',
},
  buttonsOper:{
    flexDirection:'column',
    width: 90,
    height: 90, 
    backgroundColor: '#FFA500', 
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 50, 
    marginLeft: 6,
    marginRight: 6,
    marginTop: 12
},
buttonsNumber:{
  flexDirection:'column',
  width: 90,
  height: 90, 
  backgroundColor: '#363636', 
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center', 
  borderRadius: 50, 
  marginLeft: 6,
  marginRight: 6,
  marginTop: 12
},
buttonsOperC:{
  flexDirection:'column',
  width: 295,
  height: 90, 
  backgroundColor: '#A9A9A9', 
  alignItems: 'left',
  justifyContent: 'center', 
  borderRadius: 50, 
  marginLeft: 6,
  marginRight: 6,
  marginTop: 10
},
buttonsOperZero:{
  flexDirection:'column',
  width: 190,
  height: 90, 
  backgroundColor: '#363636', 
  alignItems: 'left',
  justifyContent: 'center', 
  borderRadius: 50, 
  marginLeft: 6,
  marginRight: 6,
  marginTop: 10
},
buttonsOperViewCeX:{
  flexDirection: 'row'
},
txtName:{
  color: 'white',
  textAlign: 'center',
  marginTop: 5,
  backgroundColor: '#363636'
}
});
