function unfold(text) {
  return text.replace(/\n[\s|\t]/g, '');
};

export default function scan(text) {
  const lines = unfold(text).split('\n');
  return lines.map(l => {
    const tokens = l.split(':');
    return {
      kind: tokens[0], value: tokens[1]
    }
  });
}