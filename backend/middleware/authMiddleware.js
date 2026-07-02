const users = require("../data/users");

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token Missing"
        });
    }

    if (token !== "abc123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }

    req.user = users[0];

    next();

};

module.exports = authMiddleware;