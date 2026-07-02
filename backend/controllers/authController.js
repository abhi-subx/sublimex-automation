const users = require("../data/users");

const login = (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });
    }

    res.json({
        success: true,
        token: "abc123",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });

};

const profile = (req, res) => {

    res.json({
        success: true,
        user: req.user
    });

};

module.exports = {
    login,
    profile
};