🧙‍♂️ Backend Wizards Stage 0: Dynamic Profile Endpoint
This project implements the required GET /me RESTful API endpoint for the Backend Wizards Stage 0 task. It is built using Node.js, Express, and TypeScript and has environment variable configuration, and external API integration.

📦 Prerequisites
Ensure you have the following installed:

Node.js (v18.x or higher is recommended)

Yarn (or npm)

⚙️ Setup and Installation
Follow these steps to set up and run the project locally.

1. Clone the repository
git clone git@github.com:JoshTeflon/HNG-BE-Stage-0.git
cd hng-me-api

2. Install Dependencies
yarn install
# OR
npm install

3. Environment Configuration
Create a file named .env in the root directory of the project. This file stores your profile information required by the endpoint.

# Backend Wizard Profile Configuration (Required Fields)
USER_EMAIL="your.email@example.com"
USER_NAME="Your Full Name"
USER_STACK="Your tech stack"

# External API Configuration
CAT_FACT_API_URL="[https://catfact.ninja/fact](https://catfact.ninja/fact)"
PORT=3000

4. Build the Project
This command compiles the TypeScript files (.ts) in src/ into JavaScript files (.js) in the dist/ directory.

yarn build
# OR
npm run build

5. Start the Server
This command runs the compiled JavaScript entry point, dist/server.js, using Node.

yarn start
# OR
npm start

🚀 Server will be running at http://localhost:3000


📚 Key Dependencies
typescript
express
axios
dotenv
cors