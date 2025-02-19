"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// In src/v1/routes/workoutRoutes.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Get all workouts");
});
router.get("/:workoutId", (req, res) => {
    res.send("Get an existing workout");
});
router.post("/", (req, res) => {
    res.send("Create a new workout");
});
router.patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
});
router.delete("/:workoutId", (req, res) => {
    res.send("Delete an existing workout");
});
module.exports = router;
//# sourceMappingURL=workoutRoutes.js.map