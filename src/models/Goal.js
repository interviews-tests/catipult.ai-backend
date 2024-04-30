import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * Represents a goal in the system.
 * @typedef {Object} Goal
 * @property {string} title - The title or brief description of the goal.
 * @property {string} description - Additional details or notes about the goal.
 * @property {string} action - The specific action the user wants to accomplish as part of the goal.
 * @property {string} frequency - How often the user intends to perform the action.
 * @property {string} category - The category or tag to classify the goal (Optional).
 * @property {Date} deadline - An optional deadline by which the user aims to achieve the goal (Optional).
 * @property {boolean} completed - The status of completion of the goal.
 */

/**
 * Goal model definition.
 * @param {import('sequelize').Sequelize} sequelize - The Sequelize instance.
 * @param {import('sequelize').DataTypes} DataTypes - The data types.
 * @returns {import('sequelize').Model} - The Goal model.
 */
const Goal = sequelize.define("Goal", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Optional field
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING, // Adjust data type as needed
    allowNull: true, // Optional field
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true, // Optional field
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Goal;
