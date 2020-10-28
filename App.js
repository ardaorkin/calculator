import React from 'react';
import { ActivityIndicator, Alert, Button, SafeAreaView, StyleSheet, Text, View, FlatList, TextInput } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "40%",
        marginHorizontal: 50,
        justifyContent: "center"
    },
    layout: {
        flexDirection: 'row',
    },
    cell: {
        width: 50,
        height: 50
    }
})

var data = []
 var commands = ['C', 0, '←']
 var operations = ['-', '+', '*', '/', '%', '=']

const App = () => {
    const [calc, setCalc] = React.useState([])
    const [addOperation, setAddOperation] = React.useState();
    var numbers = []
    var duplicateOperations = []

    for (let index = 1; index < 10; index++) {
        data[index - 1] = { id: index }
    }
    var c = 8
    commands.map(command => {
        c++
        data[c] = { id: command }
    })
    var i = 14
    operations.map(operation => {
        i++
        data[i] = { id: operation }
    })
    
    React.useEffect(() => {
        if (calc.length == undefined) {
            if (addOperation != '=') {
                setCalc([calc, addOperation])
            }else{
                setCalc([...calc.toString()])
              }
        }
    }, [calc])
    var handleNumber = (e) => {
        if (operations.includes(calc[calc.length - 1]) && operations.includes(e)) {
            console.log("Do nothing!")
        } else {
            if (operations.includes(e)) {
                calc.map(el => {
                    if (operations.includes(el)) {
                        duplicateOperations.push(el)
                    }
                })
                if (duplicateOperations.length > 0) {

                    setCalc(eval(calc.join('')))
                    setAddOperation(e)
                } else {
                    setCalc([
                        ...calc,
                        e
                    ])
                }
            } else if (e === '=') {
                setCalc(eval(calc.join('')))
            } else if (e === 'C') {
                setCalc([])
            } else if (e === '←') {
                setCalc(calc.slice(0, calc.length - 1))
            } else {
                if (typeof calc[Symbol.iterator] === 'function') {

                    setCalc([
                        ...calc,
                        e
                    ])
                } else {
                    setCalc([calc])
                }
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 5, color: "grey", padding: 3, fontSize: 20, marginBottom: 15}}
                allowFontScaling={true}
                placeholder="0"
                textAlign="right"
                editable={false}
            >{typeof calc === 'function' ? calc.join('') : calc}</TextInput>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Button title={item.id.toString()} key={item.id} onPress={() => handleNumber(item.id)}/>
                    </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()} />
        </SafeAreaView>
    )
}

export default App