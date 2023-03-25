import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../.env' })

export default () => ({
    checkLoading: "config/config.ts loaded...",
    PORT: process.env.PORT || 8080,
    mongo: {
        uri: process.env.DB_URI,
        name: process.env.DB_NAME,
    },
})