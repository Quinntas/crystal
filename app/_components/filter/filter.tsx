"use client"

import {parseAsIsoDateTime, parseAsString, useQueryStates} from "nuqs";

export function Filter() {
    const [queryState, setQueryState] = useQueryStates(
        {
            q: parseAsString.withDefault(""),
            ini: parseAsIsoDateTime,
            end: parseAsIsoDateTime,
        },
        {
            history: "replace",
            scroll: false,
        }
    )

    return <>

    </>
}