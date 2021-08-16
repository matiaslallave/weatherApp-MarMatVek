export const currentDayLong = (dt) => {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      new Date(dt * 1000)
    );
  };

  export const currentDayShort = (dt) => {
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
      new Date(dt * 1000)
    );
  };



