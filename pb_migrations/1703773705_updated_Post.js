/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "126ilwzq",
    "name": "NameProduct",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2p5zgguf",
    "name": "Price",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifv2htdj",
    "name": "date",
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
  collection.schema.removeField("126ilwzq")

  // remove
  collection.schema.removeField("2p5zgguf")

  // remove
  collection.schema.removeField("ifv2htdj")

  return dao.saveCollection(collection)
})
