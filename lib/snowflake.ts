import { Snowflake } from "@sapphire/snowflake";

const epoch = new Date("2023-01-01T00:00:00.000Z");

export const snowflake = {
   generate() {
      const snowflake = new Snowflake(epoch);
      return snowflake.generate().toString();
   },
};
