#!/usr/bin/env bun

const node = process.env.ZCODE_NODE?.trim();
if (!node) {
  throw new Error("Set ZCODE_NODE to an Edge.js or Node executable before running test:edge-sqlite.");
}

const child = Bun.spawn([
  node,
  "--experimental-sqlite",
  "--test",
  "test/node/sqlite-session-store.test.cjs"
], {
  cwd: process.cwd(),
  env: process.env,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit"
});

process.exit(await child.exited);

export {};
