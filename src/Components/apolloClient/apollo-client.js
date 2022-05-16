import{ ApolloClient, InMemoryCache,} from "@apollo/client";

    const client = new ApolloClient({
        uri: 'https://wedding-organizer.hasura.app/v1/graphql',
        cache: new InMemoryCache(),
        headers: {
            "x-hasura-admin-secret" : "eNqoFrWVl7voZ2ycPVomtm4B6l1MZZrrKYryy2mPasiHE2Ginza2LvDn4LzWtDtZ"
        }
    });

export default client;

