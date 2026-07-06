const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/employees", employeeRoutes)

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Sublimex Automation Backend is running"
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})

module.exports = app