interface CreateDateParams {
  locale?: string;
  date?: Date;
}

export const createDate = ({ locale = 'default', date = new Date() }: CreateDateParams) => {
  const weekDay = date.getDay();
  const weekDayName = date.toLocaleString(locale, { weekday: 'long' });
  const weekDayNameShort = date.toLocaleString(locale, { weekday: 'short' });
  const monthDay = date.getDate();
  const monthName = date.toLocaleString(locale, { month: 'long' });
  const monthNameShort = date.toLocaleString(locale, { month: 'short' });
  const year = date.getFullYear();
  const yearShort = date.toLocaleString(locale, { year: '2-digit' });

  return {
    weekDay,
    weekDayName,
    weekDayNameShort,
    monthDay,
    monthName,
    monthNameShort,
    year,
    yearShort
  };
};
