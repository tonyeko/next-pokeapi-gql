import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:8000/",
  cache: new InMemoryCache(),
});
