import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';
import {assets} from '../../../assets';
import {fonts} from '../../../styles/baseStyle';
import {mb15, mb30, mb40, mr15} from '../../../styles/commonStyle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <PagePrimary>
      <Image source={assets.Logo02} style={styles.iconWrapper} />
      <TextComponent i18n="SCREEN.LOGIN.TITLE" styles={mb15} />
      <InputPrimary
        placeholder="PLACEHOLDER.EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={mb15}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.PASSWORD"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={mb15}
      />
      <ButtonPrimary style={mb15} content="BUTTON.SIGN_IN" onPress={() => {}} />
      <TextComponent i18n="SCREEN.LOGIN.FORGOT_PASSWORD" styles={mb30} />
      <TextComponent i18n="SCREEN.LOGIN.OR" styles={mb40} />

      <View style={styles.socialWrapper}>
        <Image source={assets.Facebook} style={mr15} />
        <Image source={assets.Twitter} style={mr15} />
        <Image source={assets.GooglePlus} />
      </View>

      <TextComponent i18n="SCREEN.LOGIN.NO_ACCOUNT" styles={mb40}>
        <TextComponent i18n="SCREEN.LOGIN.REGISTER_NOW" family={fonts.medium} />
      </TextComponent>
    </PagePrimary>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
  socialWrapper: {
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default Login;
