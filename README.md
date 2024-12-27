# 1 in 1 Million XMTP Bot

This project is an XMTP bot that enables users to interact with the "1 in 1 Million" frame, a rock-paper-scissors game. The bot is built using the [MessageKit](https://message-kit.vercel.app) v1.0.0 CLI with the `one-to-one` template.

Link to the main repository: [xmtp-1in1million](https://github.com/builders-garden/xmtp-1in1million)

## Project Description

The "1 in 1 Million XMTP Bot" allows users to play a game of rock-paper-scissors through an XMTP messaging interface. Players can make their choices, and the bot will handle the game logic, determining the winner and keeping track of the game state.

## Setup

Follow these steps to set up and run the project:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/builders-garden/xmtp-milly-bot.git
    cd xmtp-milly-bot
    ```

2. **Install dependencies:**
    ```sh
    yarn install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
    ```sh
    KEY=0x... # The private key of the app (with the 0x prefix)
    REDIS_CONNECTION_STRING=... # Redis database connection string
    MSG_LOG=true # Set to true to log messages on the console
    ```

4. **Run the project:**
    ```sh
    yarn dev
    ```
