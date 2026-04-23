import { ApolloClient, InMemoryCache } from "@apollo/client";
import { link } from "./links";

let instance: ApolloClient<unknown> | undefined;

export function getApolloClient(): ApolloClient<unknown> {
  if (!instance) {
    instance = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  }
  return instance;
}
