/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

/**
 * The depth of the search, basic or advanced.
 */
export enum SearchDepth {
    Basic = "basic",
    Advanced = "advanced",
}

export type SearchRequestBody = {
    /**
     * Your unique API key.
     */
    apiKey: string;
    /**
     * The search query string.
     */
    query: string;
    /**
     * The depth of the search, basic or advanced.
     */
    searchDepth?: SearchDepth | undefined;
    /**
     * Include a list of query related images in the response.
     */
    includeImages?: boolean | undefined;
    /**
     * Include answers in the search results.
     */
    includeAnswer?: boolean | undefined;
    /**
     * Include raw content in the search results.
     */
    includeRawContent?: boolean | undefined;
    /**
     * The number of maximum search results to return.
     */
    maxResults?: number | undefined;
    /**
     * A list of domains to specifically include in the search results.
     */
    includeDomains?: Array<string> | undefined;
    /**
     * A list of domains to specifically exclude from the search results.
     */
    excludeDomains?: Array<string> | undefined;
};

export type Results = {
    title?: string | undefined;
    url?: string | undefined;
    content?: string | undefined;
    rawContent?: string | undefined;
    score?: string | undefined;
};

/**
 * Successful search result
 */
export type SearchResponseBody = {
    answer?: string | undefined;
    query?: string | undefined;
    responseTime?: string | undefined;
    images?: Array<string> | undefined;
    followUpQuestions?: Array<string> | undefined;
    results?: Array<Results> | undefined;
};

export type SearchResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful search result
     */
    object?: SearchResponseBody | undefined;
};

/** @internal */
export const SearchDepth$ = z.nativeEnum(SearchDepth);

/** @internal */
export namespace SearchRequestBody$ {
    export type Inbound = {
        api_key: string;
        query: string;
        search_depth?: SearchDepth | undefined;
        include_images?: boolean | undefined;
        include_answer?: boolean | undefined;
        include_raw_content?: boolean | undefined;
        max_results?: number | undefined;
        include_domains?: Array<string> | undefined;
        exclude_domains?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<SearchRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            api_key: z.string(),
            query: z.string(),
            search_depth: SearchDepth$.default(SearchDepth.Basic),
            include_images: z.boolean().optional(),
            include_answer: z.boolean().optional(),
            include_raw_content: z.boolean().optional(),
            max_results: z.number().int().optional(),
            include_domains: z.array(z.string()).optional(),
            exclude_domains: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                apiKey: v.api_key,
                query: v.query,
                searchDepth: v.search_depth,
                ...(v.include_images === undefined ? null : { includeImages: v.include_images }),
                ...(v.include_answer === undefined ? null : { includeAnswer: v.include_answer }),
                ...(v.include_raw_content === undefined
                    ? null
                    : { includeRawContent: v.include_raw_content }),
                ...(v.max_results === undefined ? null : { maxResults: v.max_results }),
                ...(v.include_domains === undefined ? null : { includeDomains: v.include_domains }),
                ...(v.exclude_domains === undefined ? null : { excludeDomains: v.exclude_domains }),
            };
        });

    export type Outbound = {
        api_key: string;
        query: string;
        search_depth: SearchDepth;
        include_images?: boolean | undefined;
        include_answer?: boolean | undefined;
        include_raw_content?: boolean | undefined;
        max_results?: number | undefined;
        include_domains?: Array<string> | undefined;
        exclude_domains?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchRequestBody> = z
        .object({
            apiKey: z.string(),
            query: z.string(),
            searchDepth: SearchDepth$.default(SearchDepth.Basic),
            includeImages: z.boolean().optional(),
            includeAnswer: z.boolean().optional(),
            includeRawContent: z.boolean().optional(),
            maxResults: z.number().int().optional(),
            includeDomains: z.array(z.string()).optional(),
            excludeDomains: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                api_key: v.apiKey,
                query: v.query,
                search_depth: v.searchDepth,
                ...(v.includeImages === undefined ? null : { include_images: v.includeImages }),
                ...(v.includeAnswer === undefined ? null : { include_answer: v.includeAnswer }),
                ...(v.includeRawContent === undefined
                    ? null
                    : { include_raw_content: v.includeRawContent }),
                ...(v.maxResults === undefined ? null : { max_results: v.maxResults }),
                ...(v.includeDomains === undefined ? null : { include_domains: v.includeDomains }),
                ...(v.excludeDomains === undefined ? null : { exclude_domains: v.excludeDomains }),
            };
        });
}

/** @internal */
export namespace Results$ {
    export type Inbound = {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | undefined;
        raw_content?: string | undefined;
        score?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Results, z.ZodTypeDef, Inbound> = z
        .object({
            title: z.string().optional(),
            url: z.string().optional(),
            content: z.string().optional(),
            raw_content: z.string().optional(),
            score: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.raw_content === undefined ? null : { rawContent: v.raw_content }),
                ...(v.score === undefined ? null : { score: v.score }),
            };
        });

    export type Outbound = {
        title?: string | undefined;
        url?: string | undefined;
        content?: string | undefined;
        raw_content?: string | undefined;
        score?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Results> = z
        .object({
            title: z.string().optional(),
            url: z.string().optional(),
            content: z.string().optional(),
            rawContent: z.string().optional(),
            score: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.rawContent === undefined ? null : { raw_content: v.rawContent }),
                ...(v.score === undefined ? null : { score: v.score }),
            };
        });
}

/** @internal */
export namespace SearchResponseBody$ {
    export type Inbound = {
        answer?: string | undefined;
        query?: string | undefined;
        response_time?: string | undefined;
        images?: Array<string> | undefined;
        follow_up_questions?: Array<string> | undefined;
        results?: Array<Results$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<SearchResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            answer: z.string().optional(),
            query: z.string().optional(),
            response_time: z.string().optional(),
            images: z.array(z.string()).optional(),
            follow_up_questions: z.array(z.string()).optional(),
            results: z.array(z.lazy(() => Results$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.answer === undefined ? null : { answer: v.answer }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.response_time === undefined ? null : { responseTime: v.response_time }),
                ...(v.images === undefined ? null : { images: v.images }),
                ...(v.follow_up_questions === undefined
                    ? null
                    : { followUpQuestions: v.follow_up_questions }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        answer?: string | undefined;
        query?: string | undefined;
        response_time?: string | undefined;
        images?: Array<string> | undefined;
        follow_up_questions?: Array<string> | undefined;
        results?: Array<Results$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchResponseBody> = z
        .object({
            answer: z.string().optional(),
            query: z.string().optional(),
            responseTime: z.string().optional(),
            images: z.array(z.string()).optional(),
            followUpQuestions: z.array(z.string()).optional(),
            results: z.array(z.lazy(() => Results$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.answer === undefined ? null : { answer: v.answer }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.responseTime === undefined ? null : { response_time: v.responseTime }),
                ...(v.images === undefined ? null : { images: v.images }),
                ...(v.followUpQuestions === undefined
                    ? null
                    : { follow_up_questions: v.followUpQuestions }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}

/** @internal */
export namespace SearchResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: SearchResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SearchResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => SearchResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: SearchResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => SearchResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
