import cassandra from 'cassandra-driver';

export const initDatabase = async ({user, password, host, port, keyspace, localDataCenter}) => {
    const authProvider = new cassandra.auth.PlainTextAuthProvider(
        user, password
    );
    const client = new cassandra.Client({
        contactPoints: [host],
        authProvider,
        protocolOptions: { port: [port] },
        keyspace,
        localDataCenter,
    });

    await client.connect();
    return client;
};
