import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
    const { startSSOFlow } = useSSO();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const { setActive, createdSessionId } = await startSSOFlow({ strategy: "oauth_google" });

            if (createdSessionId && setActive) {
                setActive({ session: createdSessionId });
                
                router.replace('/(tabs)')
            }
        } catch (err) {
            console.error(`Oauth error: ${err}`)
        }
    }

    return (
        <View style={styles.container}>
            {/* Brand */}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>
                    spotlight
                </Text>
                <Text style={styles.tagline}>don't miss anything</Text>
            </View>

            {/* Illustration */}
            <View style={styles.illustrationContainer}>
                <Image source={require('@/assets/images/auth-bg-2.png')}
                    style={styles.illustration}
                    resizeMode='cover'
                />
            </View>

            {/* Login Button */}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleLogin}
                    activeOpacity={0.9}
                >
                    <Ionicons name='logo-google' size={20} color={COLORS.surface} style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <Text style={styles.termsText}>
                    By continuing, you agree to our Terms and Privacy Policy
                </Text>
            </View>
        </View>
    )
}