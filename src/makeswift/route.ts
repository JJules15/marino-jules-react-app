import {MakeswiftApiHandler} from "@makeswift/runtime/next/server";
import {strict} from "assert";

import {runtime} from "./runtime"

strict(
    process.env.MAKESWIFT_SITE_API_KEY,
    "caa338b5-caa2-4f08-84c6-2ef67738ae8a"
);

const handler = MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
    runtime,
});

export {handler as GET, handler as POST};
