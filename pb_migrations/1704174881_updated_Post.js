/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tfwarnak",
    "name": "ImgDetail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/jpeg"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // remove
  collection.schema.removeField("tfwarnak")

  return dao.saveCollection(collection)
})
