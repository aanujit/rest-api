import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight} from 'react-native';
import axios from 'axios';
export default function App() { 
  let [quote, setQuote] = React.useState();
  // let [source, setSource] = React.useState('')
  // const fetchApiCall = () => {
  //   fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "quotes15.p.rapidapi.com",
  //       "x-rapidapi-key": "7bb1b6494dmsh8c833dc81d07ffdp162d47jsn8ccc49a10320"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setQuote(response.content);
  //       setSource(response.originator.name)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  const restAppCall=() =>{
    fetch("http://192.168.1.120:3000/findlength", {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      "body":JSON.stringify({
        "studentname":"Anujit"
      })
    })
    .then(response => response.json())
      .then(response => {
        setQuote(response);
        
      })
      .catch(err => {
        console.log(err);
      });
  }
  // const axiosApiCall = () => {
  //   axios ({
  //     "method": "GET",
  //     "url": "https://quotes15.p.rapidapi.com/quotes/random/",
  //     "headers": {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": "quotes15.p.rapidapi.com",
  //       "x-rapidapi-key": "7bb1b6494dmsh8c833dc81d07ffdp162d47jsn8ccc49a10320",
  //       "useQueryString": true
  //     }, "params": {
  //       "language_code": "en"
  //     }
  //   })
  //     .then((response) => {
  //       setQuote(response.data.content);
  //       setSource(response.data.originator.name)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <Text style={{color:'black'}}>Example with fetch and Axios</Text>
      <TouchableHighlight onPress={()=>restAppCall()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
       {/* <TouchableHighlight onPress={axiosApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Axios</Text>
        </View>
      </TouchableHighlight> */}
      {quote ?
      <View style={styles.quoteContainer}>
        
        <Text style={styles.quote}>{quote.studentname}</Text>
        <Text style={styles.quote}>{quote.namelength}</Text>

      </View>
      :null}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 35,
    color: 'green'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  quote: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  source: {
    textAlign: 'right',
    marginTop: 15
  },
  quoteContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }

});
