import {Separator} from "@/components/ui/separator";

export function Footer() {
    return <footer className={"flex flex-col gap-[20px]"}>
        <Separator/>

        <div className={"flex items-center justify-between"}>
            <p>Copy </p>
            <p>Footer</p>
        </div>
    </footer>
}