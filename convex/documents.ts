import { query } from "./_generated/server";

export const getDocs = query({
  handler: async (ctx) => {
    return await ctx.db.query("documents").collect();
  },
});
