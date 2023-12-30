/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("exo7iwdoyxvjwe9");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "exo7iwdoyxvjwe9",
    "created": "2023-12-28 11:05:50.104Z",
    "updated": "2023-12-28 11:05:50.104Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bcvx4uua",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
