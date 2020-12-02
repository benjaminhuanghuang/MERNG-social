import React from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

// point to graphql server
const httpLink = createHttpLink({
  uri: "http://localhost:8964",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient<NormalizedCacheObject>({
  link: authLink.concat(httpLink) as any,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
