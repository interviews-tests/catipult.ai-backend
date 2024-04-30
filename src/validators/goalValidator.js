import Joi from "joi";

/**
 * Joi schema for validating create goal request.
 * @constant
 * @type {Joi.ObjectSchema}
 */
const createGoalSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  action: Joi.string().required(),
  frequency: Joi.string().required(),
  category: Joi.string(),
  deadline: Joi.date(),
  completed: Joi.boolean().default(false),
}).options({ allowUnknown: true });

/**
 * Joi schema for validating update goal request.
 * @constant
 * @type {Joi.ObjectSchema}
 */
const updateGoalSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  action: Joi.string(),
  frequency: Joi.string(),
  category: Joi.string(),
  deadline: Joi.date(),
  completed: Joi.boolean().default(false),
}).options({ allowUnknown: true });

/**
 * Middleware function to validate create goal request.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param {Express.NextFunction} next - Express next middleware function.
 */
export function validateCreateGoal(req, res, next) {
  const { error } = createGoalSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

/**
 * Middleware function to validate update goal request.
 * @function
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param {Express.NextFunction} next - Express next middleware function.
 */
export function validateUpdateGoal(req, res, next) {
  const { error } = updateGoalSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}
