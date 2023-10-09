import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import OccurrencesList from '../../components/OccurrencesList';
import Search from '../../components/Search';
import LogoImg from '../../assets/ping.png';
import {
    Container,
    Header,
    Message,
    Title,
    List,
    Button,
    ButtonText,
    Warning,
    Logo,
    TitleContainer,
    ButtonsContainer,
    Separator
} from './styles'

import { AuthContext } from '../../contexts/auth';

import { useNavigation, useIsFocused } from '@react-navigation/native'

export default function Home() {
    const { user, signOut, loading } = useContext(AuthContext);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [occurrences, setOccurrences] = useState([]);
    const [loadingOccurrences, setLoadingOccurrences] = useState(false);

    async function loadOccurrences() {
        try {
            setLoadingOccurrences(true);
            const response = await api.get('occurrences');
            console.log(response.data.data)
            setOccurrences(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar os usuários:', error);
        } finally {
            setLoadingOccurrences(false);
        }
    }

    useEffect(() => {
        if (isFocused) {
            loadOccurrences();
        }
    }, [isFocused]);


    if (loadingOccurrences || loading) {
        return (
            <Container>
                <ActivityIndicator size={36} color="#000" />
            </Container>
        )
    }
    return (
        <Container>
            <>
                <Header>
                    <TitleContainer>
                        <Logo source={LogoImg} />
                        <Message>Ocorrências perto de você</Message>
                    </TitleContainer>
                    <ButtonsContainer>
                        <Button onPress={() => signOut()}>
                            <ButtonText>Sair</ButtonText>
                        </Button>
                        <Separator/>
                        <Button onPress={() => navigation.navigate('CreateOccurrence')}>
                            <ButtonText>Nova Ocorrência</ButtonText>
                        </Button>
                    </ButtonsContainer>
                </Header>

                <List
                    data={occurrences}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OccurrencesList data={item} />}
                />
            </>


        </Container>
    )
}