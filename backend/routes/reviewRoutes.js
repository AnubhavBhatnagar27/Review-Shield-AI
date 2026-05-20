import express from "express";
import fs from "fs";
import { spawn } from "child_process";

const router = express.Router();

router.post("/analyze", async (req, res) => {

  try {

    // Save request body
    fs.writeFileSync(
      "input.json",
      JSON.stringify(req.body)
    );

    // Run Python script
    const pythonProcess = spawn(
      "C:\\Users\\Anubhav\\AppData\\Local\\Programs\\Python\\Python311\\python.exe",
      ["predict.py"]
    );

    let result = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {

      if (code !== 0) {
        return res.status(500).json({
          success: false,
          error: errorOutput
        });
      }

      try {

        const prediction = JSON.parse(result);

        return res.status(200).json({
          success: true,
          prediction
        });

      } catch (err) {

        return res.status(500).json({
          success: false,
          error: "Invalid JSON from Python"
        });
      }
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;