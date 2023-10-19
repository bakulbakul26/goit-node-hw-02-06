const schemas = require("../../schemas/userVerifyEmail");

const validateBodyEmail = (req, res, next) => {
    try {
        const data = req.body;
        const { error } = schemas.verifyEmailSchema.validate(data);
        if (error) {
            return res.status(400).json({ message: "Error validation Email" });
        }
    } catch (error) {
        next();
    }
};

module.exports = validateBodyEmail;
