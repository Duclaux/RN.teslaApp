import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

const index = (props) => {

    const type = props.type
    const texte = props.texte

    const bg_btn = type === 'primary' ? '#171A20cc' : '#ffffffa6'
    const color_text = type === 'primary' ? 'white' : '#171A20'

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor:bg_btn}]}
        onPress={() => {
            console.warn('hello word')
        }}
      >
        <Text style={[styles.txt, {color:color_text}]}>{ texte }</Text>
      </Pressable>
      
    </View>
  )
}

export default index