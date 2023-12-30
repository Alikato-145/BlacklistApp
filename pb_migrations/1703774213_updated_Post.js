/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uq5p70cdauqyjp1")

  // remove
  collection.schema.removeField("89l92bdm")

  // remove
  collection.schema.removeField("ehddssvj")

  // remove
  collection.schema.removeField("joffnq2c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnvpirbo",
    "name": "Bank",
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
    "id": "xxnrih4i",
    "name": "Idcard",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "89l92bdm",
    "name": "Bank",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehddssvj",
    "name": "Idcard",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "joffnq2c",
    "name": "PhoneNum",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("wnvpirbo")

  // remove
  collection.schema.removeField("xxnrih4i")

  return dao.saveCollection(collection)
})
