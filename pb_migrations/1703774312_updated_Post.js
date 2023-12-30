/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmiq0qkr",
    "name": "PhoneNum",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // remove
  collection.schema.removeField("vmiq0qkr")

  return dao.saveCollection(collection)
})
