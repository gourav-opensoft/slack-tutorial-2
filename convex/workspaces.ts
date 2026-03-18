import { v } from "convex/values";

import { auth } from "./auth";
import { query, mutation } from "./_generated/server";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const joinCode = "123456";
    const workspaceId = await ctx.db.insert("workspaces",{
        name: args.name,
        userId,
        joinCode,
    });

    return workspaceId;
    },
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);

        if (!userId) {
            return [];
        }

        return await ctx.db
            .query("workspaces")
            .withIndex("by_user_id", (q) => q.eq("userId", userId))
            .collect();
    },
});

export const getById = query({
    args: { id: v.id("workspaces") },
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);

        if (!userId) {
            return null;
        }

        return await ctx.db.get(args.id);
    },
});