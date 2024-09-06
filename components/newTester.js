export const newTester = (password) => {
  const options = {
    translations: zxcvbnts["language-en"].translations,
    graphs: zxcvbnts["language-common"].adjacencyGraphs,
    dictionary: {
      ...zxcvbnts["language-common"].dictionary,
      ...zxcvbnts["language-en"].dictionary,
    },
  };
  zxcvbnts.core.zxcvbnOptions.setOptions(options);
  const result = zxcvbnts.core.zxcvbn(password);
  console.log(result);
};
