//import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import html2 from "rollup-plugin-html2";
import svelte from "rollup-plugin-svelte";
import serve from "rollup-plugin-serve";
import postcss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";
import livereload from "rollup-plugin-livereload";
import sveltePreprocessor from "svelte-preprocess";
import copy from "rollup-plugin-copy-assets";

const isDevelopment = process.env.NODE_ENV === "development";

const plugins = [
    svelte({
        dev: isDevelopment,
        extensions: [".svelte"],
        preprocess: sveltePreprocessor({postcss: true}),
        emitCss: true,
    }),
    postcss({
        extract: true,
    }),
    //typescript(),
    commonjs({include: "node_modules/**", extensions: [".js", ".ts"]}),
    resolve(),
    copy({
        assets: [
            "assets",
        ],
    }),
    html2({
        template: "src/index.html",
    }),
];
if (isDevelopment) {
    plugins.push(
        serve({
            contentBase: "./dist",
            open: false,
        }),
        livereload({watch: "./dist"}),
    );
} else {
    plugins.push(terser({sourcemap: true}));
}

module.exports = {
    input: "src/index.ts",
    output: {
        dir: "docs",
        sourcemap: true,
        format: "iife",
    },
    plugins,
    moduleContext: (id) => {
        // In order to match native module behaviour, Rollup sets `this`
        // as `undefined` at the top level of modules. Rollup also outputs
        // a warning if a module tries to access `this` at the top level.
        // The following modules use `this` at the top level and expect it
        // to be the global `window` object, so we tell Rollup to set
        // `this = window` for these modules.
        const thisAsWindowForModules = [
            'node_modules/moment/moment.js',
            'node_modules/moment/locale/en-ca.js'
        ];

        if (thisAsWindowForModules.some(id_ => id.trimRight().endsWith(id_))) {
            return 'window';
        }
    }
};
