"use client"

import {PostCard} from "@/app/_components/post/post-card";

export function PostBox() {
    return <>
        <section className={"grid grid-cols-1 sm:grid-cols-2 gap-[50px] my-[50px]"}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </section>
    </>
}