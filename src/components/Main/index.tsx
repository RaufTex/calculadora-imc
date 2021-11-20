import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

export default function Main() {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [resultado, setResultado] = useState('');
  const [textInputAlt, setTextInputAlt] = useState('');
  const [textInputPes, setTextInputPes] = useState('');

  const handleInput = () => {
    setTextInputAlt('');
    setTextInputPes('');
    setResultado('');
  };

  function toNumberAlt(alt: string) {
    setTextInputAlt(alt);
    const altura = parseFloat(alt);

    setAltura(altura);
  }

  function toNumberPes(pes: string) {
    setTextInputPes(pes);
    const peso = parseFloat(pes);
    setPeso(peso);
  }

  function handleCalcular() {
    console.log(peso, altura);
    const imc = parseFloat((peso / (altura * altura)).toFixed(2));
    console.log(imc);
    if (imc < 18.5) {
      setResultado(
        `Seu IMC é ${imc}. Classificado como MAGREZA e Obesidade grau 0`
      );
    } else if (imc >= 18.5 && imc <= 24.9) {
      setResultado(
        `Seu IMC é ${imc}. Classificado como NORMAL e Obesidade grau 0`
      );
    } else if (imc >= 25.0 && imc <= 29.9) {
      setResultado(
        `Seu IMC é ${imc}. Classificado como SOBREPESO e Obesidade grau 1`
      );
    } else if (imc >= 30.0 && imc <= 39.9) {
      setResultado(
        `Seu IMC é ${imc}. Classificado como OBESIDADE e Obesidade grau 2`
      );
    } else if (imc > 40.0) {
      setResultado(
        `Seu IMC é ${imc}. Classificado como OBESIDADE GRAVE e Obesidade grau 3`
      );
    }
  }

  return (
    <>
      <View style={styles.viewresult}>
        {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
      </View>

      <View style={styles.container}>
        <Text>Altura (ex.: 1.70)</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Metros'
          keyboardType='numeric'
          onChangeText={toNumberAlt}
          value={textInputAlt}
        />
        <Text>Peso (ex.: 70.2)</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Quilos'
          keyboardType='numeric'
          onChangeText={toNumberPes}
          value={textInputPes}
        />
        <View style={styles.fixToText}>
          <Button color='#EF6C00' title='Calcular' onPress={handleCalcular} />
          <View style={styles.space} />
          <Button color='#EF6C00' title='Limpar' onPress={handleInput} />
        </View>
      </View>
    </>
  );
}
