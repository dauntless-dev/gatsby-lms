import useSound from 'use-sound';

export function Sound(sound) {
  const [play] = useSound(sound);
  return <button onClick={play}>Boop!</button>;
};