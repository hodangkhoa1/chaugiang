import dayjs from 'dayjs';

export function formatDate(
  value: dayjs.ConfigType,
  formatString = 'YYYY-MM-DD'
) {
  if (value) {
    return dayjs(value).format(formatString);
  } else {
    return '-';
  }
}
