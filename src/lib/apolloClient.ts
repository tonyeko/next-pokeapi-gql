import { ApolloClient, InMemoryCache } from "@apollo/client";

// https://www.apollographql.com/docs/react/pagination/core-api/
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: [],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          merge(existing, incoming, { args: { offset = 0 } }: any) {
            if (!existing) return incoming;
            const merged = existing.results.slice(0);
            for (let i = 0; i < incoming.results.length; ++i) {
              merged[offset + i] = incoming.results[i];
            }

            return { ...existing, results: merged };
          },
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:8000/",
  cache,
});
