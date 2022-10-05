import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import React, { Component, useState } from 'react';

export default function App() {
  const [numero, setNumero] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  function fatorial(){
    let fat = 1;
    if (numero == 1 || numero == 0) {
      setResultado(1);
    } else if (numero > 1) {
      for (let cont = 1; cont <= numero; cont++) {
        fat *= cont;
      }
      setResultado(fat);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.result}>Calcule o fatorial!</Text>
      <TextInput
        style={styles.input}
        onChangeText={(numero) => { setNumero(numero) }}
        value={Number(numero)}
        placeholder="Insira um número."
        keyboardType={"numeric"}
      />
      <TouchableHighlight
        onPress={() => fatorial()}
        style={styles.button}
        accessibilityLabel='Clique aqui para calcular o fatorial'>
        <Text style={{  color: 'white', fontWeight: 'bold', justifyContent: 'center'}}>CALCULAR</Text>
      </TouchableHighlight>
      <Text
        style={styles.result}
      >
        {Number(resultado)}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    width: 150,
    borderRadius: 25,
  },
  button: {
    width: 150,
    backgroundColor: '#0066cc',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 25,
    margin: 5
  },
  result: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

// const App = () => {

//   const [numero, setNumber] = useState(" ");

//   function fatorial(numero) {
//     let fat = 1;
//     if (numero == 1 || numero == 0) {
//       return 1;
//     } else {
//       for (let cont = 1; cont <= numero; cont++) {
//         fat *= cont;
//       }
//     }
//     return fat;
//   }

//   let resultado = fatorial(numero)

//   return (
//     <View>
//       <View style={{ alignItems: "center", marginTop: 70 }}>
//         <Text style={{ fontSize: 24, fontWeight: "bold" }}>Fatorial</Text>
//         <TextInput
//           style={styles.input}
//           value={resultado}
//           onChangeText={setNumber}
//           placeholder="Insira um numero"
//           keyboardType="numeric"
//         />
//       </View>
//       <View style={[{ width: "60%", marginTop:10, marginLeft:80, marginRight: 10, backgroundColor: "#2196F3"}]}>
//         <Button
//           color="black"
//           title={"Calcular"}
//           onPress={() => {fatorial(numero)}}
//         />
//       </View>
//       <View style={{alignItems: "center", marginTop:10}}>
//         <Text>Fatorial: {resultado}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     width: 130
//   },
//   button:{
//     width: 10,
//     height: 300,
//     color: "black"
//   }
// });

// export default App;