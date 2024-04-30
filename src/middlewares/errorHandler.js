/**
 * Express error handling middleware.
 * @module middlewares/errorHandler
 */

/**
 * Error handling middleware function.
 * @function
 * @param {Error} err - The error object.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param {Express.NextFunction} next - Express next middleware function.
 */
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
}
