import { AsyncStorage } from 'react-native'

export function saveFavorite(animal){

    AsyncStorage.setItem('animals', JSON.stringify(animal));
    
}