const NO_TABLES = [];

const ALL_TABLES_DATA = [
    {
        name: 'address',
        columns: [
            { column_name: 'address', type: 'varchar' },
            { column_name: 'id', type: 'uuid' },
            { column_name: 'town', type: 'text' },
            { column_name: 'number', type: 'int' },
            { column_name: 'flat', type: 'smallint' }
        ],
    },
    {
        name: 'person',
        columns: [
            { column_name: 'isApproved', type: 'boolean' },
            { column_name: 'height', type: 'double' },
            { column_name: 'id', type: 'uuid' },
            { column_name: 'comment', type: 'text' },
            { column_name: 'likes', type: 'int' },
            { column_name: 'birthday', type: 'date' }
        ],
        firstRow: [
            {
                isApproved: false,
                height: 27.5,
                id: '1b87f2e6-613d-11ed-9b6a-0242ac120002',
                comment: 'fine',
                likes: 245,
                birthday: Date('04-10-1999')
            }
        ]
    },
    {
        name: 'film',
        columns: [
            { column_name: 'name', type: 'ascii' },
            { column_name: 'duration', type: 'duration' },
            { column_name: 'actors', type: 'int' },
            { column_name: 'budget', type: 'bigint' },
            { column_name: 'id', type: 'bigint' },
        ],
        firstRow: [
            {
                name: 'false',
                duration: '1h4m48s20ms',
                actors: 25,
                budget: 2000000,
                id: 758998,
            }
        ]
    },
    {
        name: 'books',
        columns: [
            { column_name: 'name', type: 'varchar' },
            { column_name: 'pages', type: 'int' },
            { column_name: 'price', type: 'double' },
            { column_name: 'id', type: 'bigint' },
            { column_name: 'author', type: 'text' },
        ],
        firstRow: [
            {
                name: 'the book',
                pages: 725,
                price: 24.57,
                id: 2414524,
                author: '{"name": "Vasyl", "age": 25, "birthday":{"day": 24, "month": "February"} }'
            }
        ]
    },
    {
        name: 'users',
        columns: [
            { column_name: 'description', type: 'tuple<int, text>' },
            { column_name: 'favs', type: 'map<text, text>' },
            { column_name: 'id', type: 'uuid' },
            { column_name: 'scores', type: 'list<int>' },
            { column_name: 'tags', type: 'set<text>' }
        ],
        firstRow: [
            {
                description: { elements: [ 3, 'hours' ], length: 2 },
                favs: { band: 'Beatles', fruit: 'Apple' },
                id: '1b87f2e6-613d-11ed-9b6a-0242ac120002',
                scores: [5,4,5,3],
                tags: [ 'cute', 'pet' ]
            }
        ]
    },
    {
        name: 'hobbies',
        columns: [
            { column_name: 'id', type: 'uuid' },
            { column_name: 'hobby', type: 'hobby' }
        ],
        firstRow: [
            {
                id: '1b87f2e6-613d-11ed-9b6a-0242ac120002',
                hobby: {
                    name: 'swimming',
                    duration: 5,
                    hasAwards: true,
                    team: ['Sophia', 'Liza', 'Tom']
                },
            }
        ]
    },
    {
        name: 'friends',
        columns: [
            { column_name: 'id', type: 'uuid' },
            { column_name: 'friend', type: 'friend' },
            { column_name: 'amount', type: 'int' }
        ],
    },
];

const TABLE_WITH_NO_VALUE = [
    { table_name: 'address' }
];

const TABLES_WITH_SIMPLE_TYPES = [
    { table_name: 'person' },
    { table_name: 'film' },
];

const TABLE_WITH_JSON_TYPES = [
    { table_name: 'books' },
];

const TABLE_WITH_COMPLEX_VALUES = [
    { table_name: 'users' },
];

const TABLE_WITH_UPD_AND_VALUES = [
    { table_name: 'hobbies' },
];

const TABLE_WITH_UPD = [
    { table_name: 'friends' },
];

export {
    NO_TABLES,
    ALL_TABLES_DATA,
    TABLE_WITH_NO_VALUE,
    TABLES_WITH_SIMPLE_TYPES,
    TABLE_WITH_JSON_TYPES,
    TABLE_WITH_COMPLEX_VALUES,
    TABLE_WITH_UPD_AND_VALUES,
    TABLE_WITH_UPD
};
