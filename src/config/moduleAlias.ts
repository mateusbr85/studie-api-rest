import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..', );

moduleAlias.addAliases({
    '@src': path.join(files,'src'),
    "@bootstrap": path.join(files,"bootstrap"),
    "@database": path.join(files,"database"),
    "@models": path.join(files,"database/models"),
    "@controllers": path.join(files,"src/http/api/controllers"),
    "@api": path.join(files,"src/http/api")
})