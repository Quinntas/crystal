import {pgSchema, text, timestamp, varchar} from "drizzle-orm/pg-core";

export const schema = pgSchema("test")

export const postTable = schema.table("posts", {
    id: varchar("id", {length: 191}).primaryKey(),
    userId: varchar("user_id", {length: 191})
        .notNull()
        .references(() => userTable.id),
    title: varchar("title", {length: 191}).notNull(),
    content: text("content").notNull(),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const userTable = schema.table("users", {
    id: varchar("id", {length: 191}).primaryKey(),
    avatar: varchar("avatar", {length: 300}).notNull().default("https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand"),
    username: varchar("username", {length: 191}).notNull(),
    email: varchar("email", {length: 191}).notNull().unique(),
    hashed_password: varchar("hashed_password", {length: 191}).notNull(),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const sessionTable = schema.table("sessions", {
    id: varchar("id", {length: 191}).primaryKey(),
    userId: varchar("user_id", {length: 191})
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});