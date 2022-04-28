# @swc-node/jest 1.5.0 demo

Run `npm test` to reproduce "cannot find module" error with `@swc-node/jest@1.5.0`

    ➜ npm t

    > swc-node-jest-1.5.0-demo@1.0.0 test
    > jest

    FAIL src/index.test.ts
    ● Test suite failed to run

        Cannot find module 'src/module' from 'src/index.ts'

        Require stack:
          src/index.ts
          src/index.test.ts

        > 1 | import { func } from "@/module";
            |                                ^
          2 |
          3 | export function main() {
          4 |   func();

          at Resolver._throwModNotFoundError     (node_modules/jest-resolve/build/resolver.js:491:11)
          at Object.<anonymous> (src/index.ts:1:32)
