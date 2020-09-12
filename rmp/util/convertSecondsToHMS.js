export default function convertSecondsToHMS(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}
//# sourceMappingURL=convertSecondsToHMS.js.map