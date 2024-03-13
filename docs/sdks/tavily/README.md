# Tavily SDK


## Overview

Tavily Search API: Tavily Search API optimized for LLMs and RAG, offering efficient, quick, and persistent search results.

Official Taviliy API docs
<https://docs.tavily.com/docs/tavily-api/rest_api>
### Available Operations

* [search](#search) - Search for data based on a query.

## search

Search for data based on a query.

### Example Usage

```typescript
import { Tavily } from "tavily";

async function run() {
  const sdk = new Tavily();

  const result = await sdk.search({
    apiKey: "<value>",
    query: "<value>",
    includeDomains: [
      "<value>",
    ],
    excludeDomains: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchRequestBody](../../models/operations/searchrequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SearchResponse](../../models/operations/searchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
