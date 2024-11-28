const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle the chat input and send it to OpenAI API
app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;  // Get the user's message
    if (!userMessage) return res.status(400).send('Message is required');

    // Send the message to OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',  // You can use other models as well (like gpt-3.5-turbo)
        prompt: userMessage,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Return the AI's response back to the client
    res.json({ response: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the request');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
