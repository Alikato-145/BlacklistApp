/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("exvbrkhp62y5sj3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "exvbrkhp62y5sj3",
    "created": "2024-01-01 16:45:32.298Z",
    "updated": "2024-01-01 18:11:31.179Z",
    "name": "Image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5jin9ykr",
        "name": "Detail",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
