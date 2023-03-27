
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://www.dnd5eapi.co/graphql',
    documents: 'src/util/*.tsx',
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: []
        }
    }
};

export default config;
