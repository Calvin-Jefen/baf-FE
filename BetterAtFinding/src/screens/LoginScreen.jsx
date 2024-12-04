import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { login } from '../services/AuthService'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk, clearError } from '../redux/slices/authSlice'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user, status, error } = useSelector(state => state.auth)


  const handleLogin = async () => {
    try {
      console.log(email, password)
      dispatch(loginThunk({ email, password }))
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    console.log('Status:', status);
  }, [status]);

  useEffect(() => {
    if (status === 'succeeded') {
      navigation.navigate('MainTabs')
    }
  }, [status, dispatch]);

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />
      <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize='none' />
      <Button title='Login' onPress={handleLogin} />
      <TouchableOpacity>
        <Text style={styles.registerLink} onPress={handleRegister}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  registerLink: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});