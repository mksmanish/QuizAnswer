import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {thumbdown, thumbup} from '../../assets';
const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{margin: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{`Your Results ${route.params.points} points`}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 14,
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text>Questions Answered</Text>
        <Text>(10/10)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: 'white',
          borderRadius: 7,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: 'green',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Score Card
        </Text>
        <FlatList
          numColumns={1}
          data={route.params.answers}
          renderItem={({item, i}) => (
            <View style={{flexDirection: 'row'}}>
              {item.answer === true ? (
                <Image
                  style={{
                    resizeMode: 'contain',
                    borderColor: '#00FFFF',
                    width: 20,
                    height: 20,
                    padding: 10,
                  }}
                  source={thumbup}
                />
              ) : (
                <Image
                  style={{
                    resizeMode: 'contain',
                    borderColor: '#00FFFF',
                    width: 20,
                    height: 20,
                    padding: 10,
                  }}
                  source={thumbdown}
                />
              )}
              <Text>{item.sawal?.question}</Text>
            </View>
          )}
        />
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'green',
            padding: 8,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
