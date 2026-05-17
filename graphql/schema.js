const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');

const schemaPath = path.join(__dirname, 'schema.graphql');
const schemaSource = fs.readFileSync(schemaPath, 'utf8');
const schema = buildSchema(schemaSource);

module.exports = schema;
