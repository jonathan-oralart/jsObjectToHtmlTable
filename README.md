# JSON Object to HTML Viewer

A tool that converts JavaScript/JSON objects into an interactive HTML table view with a beautiful, collapsible interface.

## Usage

```typescript
import { getHtmlOfObjectTable } from "./mod.ts";

// Convert your object to HTML
const html = getHtmlOfObjectTable(yourObject);

// Write to a file
await Deno.writeTextFile("output.html", html);
```