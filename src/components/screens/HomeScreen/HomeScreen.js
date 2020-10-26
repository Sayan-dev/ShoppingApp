import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Text, Title } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../commons/Button/Button';
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Card from '../../commons/Card/Card';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../../contexts/theme';

const HomeScreen = props => {
    const theme=useTheme();
    const darkMode=useContext(ThemeContext);
    return (
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor:theme.colors.accent}}>

          <View style={{backgroundColor:theme.colors.background}}>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Title style={styles.sectionTitle}>Test</Title>

              <Card
                title="New Card"
                subtitle="Melody"
                Body={
                  
                  ()=><>
                    <Title>
                      Big Boy
                    </Title>
                    <Paragraph>
                        Bink Sake
                      </Paragraph>
                    
                  </>

                }
              
              
              />
              

              
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    scrollView: {
      
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
  
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
  
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
  
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

HomeScreen.propTypes = {
    
};

export default HomeScreen;