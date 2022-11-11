import { describe, expect, test } from '@jest/globals';
import { getSchema } from './mocks';
import {
    NO_TABLES,
    TABLE_WITH_NO_VALUE,
    TABLES_WITH_SIMPLE_TYPES,
    TABLE_WITH_JSON_TYPES,
    TABLE_WITH_COMPLEX_VALUES,
    TABLE_WITH_UPD_AND_VALUES,
    TABLE_WITH_UPD
} from './mockData';
import { NO_TABLES_IN_DATABASE } from '../constants/notifications';
import { JSONSchemaType } from '../constants/JSONSchemaType';

describe('module for getting schema', () => {
    test('get no data and throws error', () => {
        expect(() => getSchema(NO_TABLES)).toThrow(NO_TABLES_IN_DATABASE);
    });

    test('get empty table and creates valid schema', () => {
        const schema = getSchema(TABLE_WITH_NO_VALUE);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });

    test('get tables with simple types and creates valid schema', () => {
        const schema = getSchema(TABLES_WITH_SIMPLE_TYPES);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });

    test('get table with json and creates valid schema', () => {
        const schema = getSchema(TABLE_WITH_JSON_TYPES);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });

    test('get tables with complex types and creates valid schema', () => {
        const schema = getSchema(TABLE_WITH_COMPLEX_VALUES);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });

    test('get tables with utp types and values and creates valid schema', () => {
        const schema = getSchema(TABLE_WITH_UPD_AND_VALUES);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });

    test('get tables with utp types and no values and creates valid schema', () => {
        const schema = getSchema(TABLE_WITH_UPD);
        expect(typeof schema).toBe(JSONSchemaType.OBJECT);
        expect(typeof JSON.stringify(schema)).toBe(JSONSchemaType.STRING);
        expect(schema).toHaveProperty('title', 'type', '$schema', 'properties');
    });
});
