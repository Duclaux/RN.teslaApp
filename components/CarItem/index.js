import { View, Text, ImageBackground, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import ButtonCustom from '../Button'

const index = (props) => {

  const { name, tagLine, tagLineCta, image } = props

  return (
    <View style={styles.carContainer}>
        <ImageBackground
            source={image}
            style={styles.img}
        />

        <View style={styles.titles}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.subTitle}>
          { tagLine }
          <Text style={styles.subTitleCta}>
            { tagLineCta }
          </Text>
        </Text>
        </View>

        <View style={styles.btn_content}>
          <ButtonCustom type='primary' texte='Custom Order'/>
          <ButtonCustom type='secondary' texte='existing inventor'/>
        </View>
    </View>
  )
}

export default index