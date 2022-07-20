import Sound from 'react-native-sound';

export const tapEffect = async () => {
  let track = new Sound('doorbell_chime_bell.mp3', Sound.MAIN_BUNDLE, err =>
    track.play(),
  );
};
