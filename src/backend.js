import AsyncStorage from '@react-native-async-storage/async-storage';

const storePlayers = async players => {
  try {
    await AsyncStorage.setItem('GemsCM-players', JSON.stringify(players));
  } catch (e) {
    //saving error
  }
};

const getPlayers = async () => {
  try {
    const value = await AsyncStorage.getItem('GemsCM-players');
    if (value != null) {
      const players = JSON.parse(value);
      return players;
    }
  } catch (e) {
    //saving error
  }
};
