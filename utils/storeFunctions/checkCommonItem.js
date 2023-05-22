function checkCommonItem(arr1, arr2) {
  return arr1.some((item1) => {
    return arr2.find((item2) => item2.id === item1.id) !== undefined;
  });
}

export { checkCommonItem };
