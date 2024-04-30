/**
 * Routes for managing goals.
 * @module routes/goalRoutes
 */

import express from "express";
import {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
  getSingleGoal,
  deleteAllGoals,
  getAllCompletedGoals,
} from "../controllers/goalController.js";
import {
  validateCreateGoal,
  validateUpdateGoal,
} from "../validators/goalValidator.js";

const router = express.Router();

/**
 * Route for getting all goals.
 * @name GET /goals
 * @function
 */
router.get("/", getAllGoals);

/**
 * Route for creating a new goal.
 * @name POST /goals
 * @function
 */
router.post("/", validateCreateGoal, createGoal);

/**
 * Route for updating a goal.
 * @name PUT /goals/:id
 * @function
 */
router.put("/:id", validateUpdateGoal, updateGoal);

/**
 * Route for deleting a goal.
 * @name DELETE /goals/:id
 * @function
 */
router.delete("/:id", deleteGoal);

/**
 * Route for getting a single goal by ID.
 * @name GET /goals/:id
 * @function
 */
router.get("/:id", getSingleGoal);

/**
 * Route for deleting all goals.
 * @name DELETE /goals
 * @function
 */
router.delete("/", deleteAllGoals);

/**
 * Route for getting all completed goals.
 * @name GET /goals/completed
 * @function
 */
router.get("/completed", getAllCompletedGoals);

export default router;
