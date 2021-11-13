import { Cat, CatType } from "./cats.model";
import e, { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

// READ 고양이 전체 데이터 조회
router.get("/cats", readAllcat);

// READ 특정 고양이 데이터 조회
router.get("/cats/:id", readCat);

// CREATE 새로운 고양이 추가 api
router.post("/cats", createCat);

// UPDATE => PUT
router.patch("/cats/:id", updateCat);

// UPDATE => PATCH
router.patch("/cats/:id", updatePartialCat);

// DELETE
router.delete("/cats/:id", deleteCat);

export default router;
