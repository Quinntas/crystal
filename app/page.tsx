import {PageBox} from "@/app/_components/page-box";
import {NavBar} from "@/app/_components/nav-bar";
import {Footer} from "@/app/_components/footer";
import {PostBox} from "@/app/_components/post/post-box";
import {Filter} from "@/app/_components/filter/filter";
import {Suspense} from "react";

export default function Home() {
    return <PageBox>
        <NavBar/>

        <Suspense>
            <Filter/>
        </Suspense>

        <PostBox/>

        <Footer/>
    </PageBox>
}
