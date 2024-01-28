import { cacheExchange, createClient, fetchExchange } from "@urql/core";

const makeClient = (headers?: any) => {
  let client = createClient({
    url: (process.env.API_URL as string) || "http://localhost:8000/graphql/",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      return headers ? { headers: headers } : {};
    },
  });
  return client;
};

export { makeClient };
