export default function convertSecondsToHMS(seconds: number) {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}
