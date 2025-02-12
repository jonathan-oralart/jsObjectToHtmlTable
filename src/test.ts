import { getHtmlOfObjectTable } from "./mod.ts";

// const file = await Deno.readTextFile("./big-json-example-abacus.json");
const file = await Deno.readTextFile("./random-user-data.json");

const json = JSON.parse(file);

const start = performance.now();
const html = getHtmlOfObjectTable(json);
const end = performance.now();
console.log(`Render time: ${Math.round(end - start)}ms`);

await Deno.writeTextFile("output.html", html);
