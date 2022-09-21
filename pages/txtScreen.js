import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles.js';
import illustration from '../assets/imgs/Blood test-pana.svg'

import { useNavigation } from '@react-navigation/native';

export function TxtScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.containerTxt}>
      <StatusBar
        animated={true} />
      <View style={styles.containerQualquerCoisa}>
        <Image source={illustration} style={styles.ilustracao} />
        <Text style={styles.descricao}>
          Saiba a diferença entre a Gíardiase e a Amebíase, duas doenças semelhantes causadas por parasitas diferentes!
        </Text>
      </View>
    </View>
  );
}