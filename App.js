/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Geolocation from '@react-native-community/geolocation';
import AppIntroSlider from 'react-native-app-intro-slider'
class App extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = { ready: false, error: null,where:{lat:null,lng:'null'},show_Main_App: false }
  };
  
  componentDidMount(){
    let geoOption={
      enableHighAccuracy: true,
      maximumAge: 60*60*24,
      timeout: 2000
    }
    Geolocation.getCurrentPosition(this.succes,this.error,geoOption);
    // geolocation.getCurrentPosition(this.succes,this.error,geoOption);
  }
  succes=(pstn)=>{
    console.log(pstn.coords);
    this.setState(state => ({where:{lat:pstn.coords.latitude,long:pstn.coords.latitude}}))
  }
  error=(pstn)=>{
    console.log(pstn.coords);
    
  }
  handleClick = () => {
    Linking.canOpenURL('https://www.google.com/maps/place/National+Monument/@-6.1753871,106.8249641,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528').then(supported => {
      if (supported) {
        Linking.openURL('https://www.google.com/maps/place/National+Monument/@-6.1753871,106.8249641,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528');
      } else {
        console.log("Don't know how to open URI: " + 'https://www.google.com/maps/place/National+Monument/@-6.1753871,106.8249641,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528');
      }
    });
  };
  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };
  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };
  render(){
    if (!this.state.show_Main_App) {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1 ,justifyContent:'center'}}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>
              This is your main App screen After App Walkthrough.{this.state.where.lat},{this.state.where.long} ,
          </Text>
          <Button title='tombol' onPress={this.handleClick}></Button>
          </View>
          <View style={{flex:1}}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>
              This is your main App screen After App Walkthrough.{this.state.where.lat},{this.state.where.long} ,
          </Text>
          
          </View>
          </View>
      );
   } else { 
       return ( 
         <AppIntroSlider slides={slides} onDone={this.on_Done_all_slides} 
           /> 
        ); 
   } 
}
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  MainContainer: { 
    flex: 1, 
    paddingTop: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
   }, 
   title: { 
    fontSize: 26, 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20, 
   }, 
   text: { 
    color: '#fff', 
    fontSize: 20, 
   }, 
   image: { 
    width: 200, 
    height: 200, 
    resizeMode: 'contain' 
   } 
,
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    image: {
      uri:
        'https://i.imgur.com/jr6pfzM.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7BB64',
  },
  {
    key: 'k2',
    title: 'fast delivery',
    text: 'get your order insantly fast',
    image: {
      uri:
        'https://i.imgur.com/au4H7Vt.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F4B1BA',
  },
  {
    key: 'k3',
    title: 'many store ',
    text: 'Multiple store location',
    image: {
      uri: 'https://i.imgur.com/bXgn893.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#4093D2',
  },
  {
    key: 'k4',
    title: '24 hours suport',
    text: ' Get Support 24 Hours with Real Human',
    image: {
      uri: 'https://i.imgur.com/mFKL47j.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#644EE2',
  }
];



export default App;
