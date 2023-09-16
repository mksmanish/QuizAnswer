import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import React from 'react';
import {quiz, like} from '../../assets';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={'white'}
        barStyle="dark-content"
        translucent={false}
      />
      <View>
        <Image style={styles.frontImage} source={quiz} />
        <View style={styles.mainContainer}>
          <Text style={styles.quizText}>QUIZ RULES</Text>
          <View style={styles.ruleContainer}>
            <View style={styles.viewSmall}>
              <Image style={styles.imageSize} source={like} />
              <Text style={styles.ruleText}>
                For each correct answer you get 5 points.
              </Text>
            </View>
            <View style={styles.viewSmall}>
              <Image style={styles.imageSize} source={like} />
              <Text style={styles.ruleText}>
                There is no negative marking for the wrong answer.
              </Text>
            </View>
            <View style={styles.viewSmall}>
              <Image style={styles.imageSize} source={like} />
              <Text style={styles.ruleText}>
                Each Quesyion has a time limit for 15 seconds.
              </Text>
            </View>
            <View style={styles.viewSmall}>
              <Image style={styles.imageSize} source={like} />
              <Text style={styles.ruleText}>
                You have to compulsarily anser all the Questions Given.
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('Quiz');
          }}>
          <Text style={styles.startText}>Start Quiz</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
