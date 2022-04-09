import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
    {
        input: "src/varpanel.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    {
        input: "dist/types/varpanel.d.ts",
        output: [{ file: "dist/varpanel.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];