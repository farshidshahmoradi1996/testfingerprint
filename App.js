import React from 'react';
import {View, Text, Button} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const App = () => {
  return (
    <View>
      <Text>Helooo</Text>
      <Button
        title="Auth With Finger Print"
        onPress={() => {
          FingerprintScanner.authenticate({
            title: 'انگشت خود را بگذارید روی اثر انگش',
          })
            .then(r => {
              alert('خوش آمدید');
            })
            .catch(() => {
              alert('خطا');
            });
        }}
      />
    </View>
  );
};

export default App;
