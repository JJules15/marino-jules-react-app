import {Makeswift} from "@makeswift/runtime/next";
import {strict} from "assert";

import {runtime} from "./runtime";

strict(
    process.env.MAKESWIFT_SITE_API_KEY,
    "caa338b5-caa2-4f08-84c6-2ef67738ae8a"
);

export const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY, {
    runtime,
});
