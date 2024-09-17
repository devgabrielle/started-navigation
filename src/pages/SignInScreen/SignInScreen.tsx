import React, { useState } from 'react';
import { useAuth } from "../../contexts/Auth";
import { View, Text, TextInput, TouchableOpacity  } from "react-native";

import { styles } from './styles';


export function SignInScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    return (
        <View style={styles.container}>

            <Text style={styles.title}> TELA DE LOGIN</Text>

            <TextInput style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Insira seu E-mail"
            />

            <TextInput style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="************"
            />

            <TouchableOpacity style={styles.button}
                activeOpacity={.5}
                onPress={() => signIn(email, password)}>
                <Text>Log in</Text>
            </TouchableOpacity>
    
        </View>
    );
};