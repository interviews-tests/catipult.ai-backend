import { Op } from "sequelize";
import Goal from "../models/Goal.js";

/**
 * Get all goals.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function getAllGoals(req, res) {
  try {
    const { title } = req.query;
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    const goals = await Goal.findAll({ where: condition });

    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Create a new goal.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function createGoal(req, res) {
  try {
    const { title, description, action, frequency, category, deadline } =
      req.body;
    const newGoal = await Goal.create({
      title,
      description,
      action,
      frequency,
      category,
      deadline,
    });
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/**
 * Update a goal.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function updateGoal(req, res) {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      action,
      frequency,
      category,
      deadline,
      completed,
    } = req.body;
    const [updated] = await Goal.update(
      { title, description, action, frequency, category, deadline, completed },
      { where: { id } }
    );
    if (updated) {
      const updatedGoal = await Goal.findOne({ where: { id } });
      res.json({ success: true, data: updatedGoal });
    } else {
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/**
 * Delete a goal.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function deleteGoal(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Goal.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/**
 * Get a single goal by ID.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function getSingleGoal(req, res) {
  try {
    const { id } = req.params;
    const goal = await Goal.findByPk(id);
    if (goal) {
      res.json(goal);
    } else {
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Delete all goals.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function deleteAllGoals(req, res) {
  try {
    await Goal.destroy({ where: {} });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Get all completed goals.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 */
export async function getAllCompletedGoals(req, res) {
  try {
    const completedGoals = await Goal.findAll({ where: { completed: true } });
    res.json(completedGoals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
