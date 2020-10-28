import React from 'react';
import SectionListBasics from './SectionListBasics';
import { FlatList, Image, Platform, SectionList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: Platform.OS === 'anroid' ? 200 : 100
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    ...Platform.select({
      ios: {
        backgroundColor: 'green'
      },
      android: {
        backgroundColor: 'orange',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
})

const PizzaTranslator = () => {
  const [text, setText] = React.useState('')

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text} />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text.split(' ').map(word => word && '🍕').join('')}
      </Text>
    </View>
  )
}

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
  </ScrollView>
)

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

export default SectionListBasics;