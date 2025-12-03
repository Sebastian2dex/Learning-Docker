import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: [
            "http://127.0.0.1:5173",
            "http://127.0.0.1:5173",
            "http://127.0.0.1:3000"

            // TODO: add production url here
        ],

        credentials: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
))

// API callback
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello From Server"
    })
})

const PORT = 12345
app.listen(PORT, "0.0.0.0", () => 
    console.log(`Server running on port http://0.0.0.0:${PORT}`)
)
