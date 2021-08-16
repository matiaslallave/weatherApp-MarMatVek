export const currentDayLong = (dt, tz) => {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date((dt + tz) * 1000 - 7200000)
  );
};

export const currentDayShort = (dt, tz) => {
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    new Date((dt + tz) * 1000 - 7200000)
  );
};
