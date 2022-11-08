import cassandra from 'cassandra-driver';

export const initDatabase = ({user, password, host, port, keyspace, localDataCenter}) => {
    const authProvider = new cassandra.auth.PlainTextAuthProvider(
        user, password
    );
    return new cassandra.Client({
        contactPoints: [host],
        authProvider,
        protocolOptions: { port: [port] },
        keyspace,
        localDataCenter,
    });
};
