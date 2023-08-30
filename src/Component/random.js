export function randomChange(value, percent) {
  let newValue;
  if (percent === 0) {
    newValue = value;
  } else {
    newValue = value * (1 + percent);
  }
  return Number(newValue);
}

export function ranDomValue(value, price, randomVolume) {
  const changeValue = value * Number(price);
  const afterChange = value * Number(price) + randomVolume;
  if (afterChange - changeValue < 10 || afterChange - changeValue > 30) {
    return Math.floor(changeValue);
  } else {
    return Math.floor(afterChange);
  }
}
