import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../services/api';
import {
    Container,
    ScrollViewContent,
    Card,
    PerfilImage,
    Label,
    Text as StyledText,
    Button,
    ButtonText,
    Botao,
    BotaoTexto,
    Titulo,
    ModalBackground,
    ModalButton,
    ModalButtonContainer,
    ModalButtonText,
    ModalContainer,
    ModalContent,
    ModalText
} from './styles';

function Details() {
    const route = useRoute();
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [occurence, setOccurence] = useState();
    const [loadingOccurence, setLoadingOccurence] = useState(false);

    async function loadOccurence() {
        try {
            setLoadingOccurence(true);
            const response = await api.get(`occurrences/${route.params?.id}`);
            console.log(response.data)
            setOccurence(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar os usuários:', error);
        } finally {
            setLoadingOccurence(false);
        }
    }

    useEffect(() => {
        console.log(isFocused)
        if (isFocused) {
            loadOccurence();
        }
    }, [isFocused]);

    async function deleteOccurence(id) {
        console.log(id);
        try {
            const token = await AsyncStorage.getItem('@authToken');

            const response = await api.delete(`occurrences/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                loadUsers();
                console.log("Ocorrencua deletado com sucesso");
            } else if (response.status === 404) {
                console.error("Ocorrencia não encontrado");
            } else {
                console.error("Erro ao deletar o ocorrencia");
            }
        } catch (error) {
            console.error('Erro ao carregar os ocorrencias:', error);
        }
    }

    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const openConfirmationModal = () => {
        setConfirmationModalVisible(true);
    };

    const closeConfirmationModal = () => {
        setConfirmationModalVisible(false);
    };

    const confirmDeletion = () => {
        deleteOccurence(route.params?.id);
        closeConfirmationModal();
    };


    if (loadingOccurence) {
        return (
            <Container>
                <ActivityIndicator size={36} color="#000" />
            </Container>
        )
    }

    return (
        <>
            {occurence && (
                <ScrollViewContent>
                    <Container>

                        <Card>
                            <PerfilImage
                                source={{ uri: occurence.image }}
                            />
                            <Label>Name</Label>
                            <StyledText>{occurence.title}</StyledText>
                            <Label>Email</Label>
                            <StyledText>{occurence.category}</StyledText>
                        </Card>

                        <Button onPress={openConfirmationModal}>
                            <ButtonText>
                            Excluir
                            </ButtonText>
                        </Button>

                        <Button onPress={() => navigation.goBack()}>
                            <ButtonText>Lista de Ocorrências</ButtonText>
                        </Button>
                    </Container>
                </ScrollViewContent>
            )}

        <ModalContainer
            visible={isConfirmationModalVisible}
            transparent={true}
            animationType="slide"
        >
        <ModalBackground>
            <ModalContent>
            <ModalText>Tem certeza de que deseja excluir esta ocorrência?</ModalText>
            <ModalButtonContainer>
                <ModalButton onPress={confirmDeletion}>
                <ModalButtonText>Confirmar</ModalButtonText>
                </ModalButton>
                <ModalButton onPress={closeConfirmationModal}>
                <ModalButtonText>Cancelar</ModalButtonText>
                </ModalButton>
            </ModalButtonContainer>
            </ModalContent>
        </ModalBackground>
        </ModalContainer>
        </>
    );
}

export default Details;
