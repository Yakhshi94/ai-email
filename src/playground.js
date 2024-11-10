import { db } from "./server/db";

await db.user.create({
    data: {
        email: "yakhshi@mail.ru",
        firstName: "Esmatullah",
        lastName: "Yakhshi"
    }
})

console.log('done')