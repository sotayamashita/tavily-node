<!-- Start SDK Example Usage [usage] -->
```typescript
import { Tavily } from "tavily";

async function run() {
    const sdk = new Tavily();

    const result = await sdk.search({
        apiKey: "<value>",
        query: "<value>",
        includeDomains: ["<value>"],
        excludeDomains: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->