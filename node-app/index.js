const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://mongo:27017");

async function run() {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("admin");
    const result = await db.command({ ping: 1 });
    console.log("Подключение с сервером успешно установлено");
    console.log(result);
  } catch (err) {
    console.log("Возникла ошибка");
    console.log(err);
  } finally {
    await mongoClient.close();
    console.log("Подключение закрыто");
  }
}
run();
