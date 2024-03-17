"use client"

import {Card} from "@/components/ui/card";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {BackgroundGradient} from "@/components/background-gradient";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {useRouter} from "next/navigation";

export function PostCard() {
    const router = useRouter()

    return <BackgroundGradient
        containerClassName={cn("w-full")}
        className={"w-full"}>
        <Card className={"cursor-pointer group"}
              onClick={() => router.push("/post/1")}
        >
            <div className={"p-[15px] flex justify-between"}>
                <div className={"flex flex-col justify-between"}>
                    <Link href={"#"} className={"flex gap-[10px] items-center cursor-pointer"}>
                        <Avatar className="h-[25px] w-[25px] border">
                            <AvatarImage src={"https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand"}
                                         alt="@avatar"/>
                            <AvatarFallback>
                                CQ
                            </AvatarFallback>
                        </Avatar>

                        <span>Caio Quintas</span>
                    </Link>

                    <span className={"font-semibold text-xl "}>Blog Title</span>
                    <span className={"text-sm text-muted-foreground"}>Blog Description</span>
                    <span className={"text-sm text-muted-foreground"}>Mar 24, 2024 • 7 min read •</span>
                </div>

                <Image
                    height={"150"}
                    width={"150"}
                    quality={75}
                    className={"rounded"}
                    src={"https://i.imgur.com/n2u5itQ_d.webp?maxwidth=760&fidelity=grand"}
                    alt={"img"}/>
            </div>
        </Card> </BackgroundGradient>
}