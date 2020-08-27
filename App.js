import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button, Switch,Picker} from 'react-native';

const App = ()=> {

  const [num1, setNum1]  = useState("");
  const [num2, setNum2]  = useState("");
  const [answer, setAnswer]  = useState("");
  const [resultStyles, setResultstyles] = useState({display:"none"});
  const [operation, setOperation] = useState("+")
 


  return (
    <View style={styles.container}>
        
        <Text style={styles.label}>First Number</Text>
       
        <TextInput 
          style={styles.textField} 
          placeholder="Please enter a number" 
          keyboardType="numeric" onChangeText={(val)=>{

            setNum1(val)

          }} value={num1}/>


        <Text style={styles.label}>Second Number</Text>
       
       <TextInput 
         style={styles.textField} 
         placeholder="Please enter another number" 
         keyboardType="numeric"  onChangeText={(val)=>{

          setNum2(val);

         }} value={num2} />


    <Text style={styles.label}>Operation</Text>

      <Picker style={styles.picker}
        selectedValue={operation}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {

          setOperation(itemValue);

          setResultstyles({display:"none"})
        } }
      >
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
      </Picker>

        <Button title="Calculate Sum" onPress={()=>{

            const n1 = parseInt(num1);
            const n2 = parseInt(num2);
            let result;

            if(operation=="+")
            {
                result=n1 + n2;
            }

            else
            {
              result= n1-n2;
            }


            setAnswer(result);
            setResultstyles({display:"block"})


         }}  />

        <Text style={[resultStyles,styles.results]}>{num1} {operation} {num2} = {answer}</Text>

    
    </View> 
  )
}

const styles= StyleSheet.create({

  container: {

    paddingLeft:32,
    paddingRight:32

  },

  label :{

      fontSize:18,
      color:"#f00",
      marginBottom:18

  },
  textField :{
    borderWidth:1,
    borderColor:"#000",
    padding:10,
    marginBottom:20,
    color:"#000"
  },

  picker:{
    marginTop:16
  },

  results :{
    fontSize:20,
    marginTop:16,
    color:"#f00",
    fontWeight:"bold"
  }

})


export default App;
