var tsver = '4.1.3';

System.config({
    transpiler: 'ts',
    typescriptOptions: {},
    packages: {
        ".": {
            main: "./scripts/main.ts",
            defaultExtension: "ts"
        }
    },
    meta: {
        typescript: {exports: "ts"}
    },
    paths: {
        "npm:": "https://unpkg.com"
    },
    map: {
        "ts": "npm:plugin-typescript@8.0.0/lib/plugin.js",
        "typescript": "npm:typescript@" + tsver + "/lib/typescript.js"
    }
})

System.import("./scripts/main")
    .catch(console.error.bind(console));