export function camelToNormalFirstLetterUppercase(
  camelCaseString: string
): string {
  // Split camelCaseString by capital letters and join with spaces
  const words = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Capitalize the first letter of each word
  return words
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function removeLeadingWhitespaceAndCapitalize(str: string): string {
  // Remove leading whitespace
  const trimmedStr = str.replace(/^\s+/, '');

  // Capitalize the first letter
  const capitalizedStr =
    trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);

  return capitalizedStr;
}

export function arrayToSentence(arr: string[]): string {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    const lastValue = arr.pop(); // Remove the last value
    return `${arr.join(', ')}, and ${lastValue}`;
  }
}
