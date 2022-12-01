import * as dotenv from "dotenv";

const config = dotenv.config({
    path: process.env.NODE_ENV === "dev" ? ".env.testing" : ".env"
})

export default config