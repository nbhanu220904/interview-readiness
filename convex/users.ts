import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // if user already exists
    const user = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // Create new user
    const data = {
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
    };
    if (user.length === 0) {
      const result = await ctx.db.insert("UserTable", { ...data });
      console.log(result);
      return {
        ...data,
        result,
      };
    }
    return user[0];
  },
});
