export function toHoursAndMinutes(totalMinutes) {
  if (totalMinutes === 0) {
    return null;
  }
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
