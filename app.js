import cassandra from 'cassandra-driver';
import { config } from './config';

export const initDatabase = () => {
    const authProvider = new cassandra.auth.PlainTextAuthProvider(
        config.user,
        config.password,
    );
    return new cassandra.Client({
        contactPoints: [config.host],
        authProvider,
        protocolOptions: { port: [config.port] },
        keyspace: 'test_keyspace',
        localDataCenter: "datacenter1"
    });
};
