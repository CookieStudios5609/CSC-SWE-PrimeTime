from fastapi import APIRouter, HTTPException
import aiosqlite
import sqlite3
from ..models import datamodels
from ..util import utils

router = APIRouter(
    prefix="/item"
)


@router.get("/{item_id}")
async def find(item_id: int):
    return await get_item(item_id)


@router.post("/new", status_code=201)
async def create(item: datamodels.ItemNoId):
    return f"Your item was successfully created with id: {await make_item(item)}"


@router.post("/list", status_code=201)
async def list_item(item: datamodels.Item):
    return f"Your item was successfully listed with id: {await make_listing(item)}"


@router.get("/all")
async def get_all_listings() -> list[datamodels.ListedItem]:
    return await fetch_all_listings()


async def get_item(item_id: int) -> datamodels.Item:
    async with aiosqlite.connect("./testing.db") as db:
        db.row_factory = utils.dict_factory
        try:
            cursor = await db.execute("SELECT * FROM item WHERE item_id = ?", (item_id,))
            result = await cursor.fetchone()
        except sqlite3.OperationalError:  # item table doesn't exist
            pass
        if not result:
            return HTTPException(status_code=404, detail=f"An item with id {item_id} was not found.")
        return datamodels.Item.model_validate(result)


async def make_item(item) -> int:
    async with aiosqlite.connect("./testing.db") as db:
        cursor = await db.execute("INSERT INTO item (name, image, price, description, seller_id, tag, sku) "
                                  "VALUES (?, ?, ?, ?, ?, ?, ?)", (
                                      item.name, item.image, item.price, item.desc, str(item.seller), item.tag, item.sku
                                    ))
        await db.commit()
        return cursor.lastrowid


async def make_listing(item):
    async with aiosqlite.connect("./testing.db") as db:
        cursor = await db.execute("INSERT INTO listing VALUES (?, ?, ?, ?, ?)",
                                  (item.item_id, item.name, item.image, item.price, item.tag))
        await db.commit()
        return cursor.lastrowid


async def fetch_all_listings():
    async with aiosqlite.connect("./testing.db") as db:
        db.row_factory = utils.dict_factory
        cursor = await db.execute("SELECT * FROM listing")
        return [datamodels.ListedItem.model_validate(listing) for listing in await cursor.fetchall()]
