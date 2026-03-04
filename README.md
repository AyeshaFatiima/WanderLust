# WanderLust
WanderLust is a comprehensive web application designed to simulate a travel marketplace like Airbnb. It follows the MVC (Model-View-Controller) architecture to ensure scalable and organized code. Users can browse exotic listings, share their own properties, and leave reviews for the community.

🔗 Live: https://wanderlust-dn2a.onrender.com/listings 

🚀 Key Features
Full CRUD Functionality: Users can Create, Read, Update, and Delete travel listings seamlessly.

User Authentication: Secure signup and login flow powered by Passport.js.

Authorization: Middleware implemented to ensure only owners can edit or delete their specific listings.

Review System: Interactive rating and commenting system for enhanced user engagement.

Cloud Image Management: Integrated with Cloudinary for optimized image uploads and storage.

Persistent Sessions: Uses connect-mongo to store sessions in the database, keeping users logged in even after server restarts.

🛠️ Technical Stack
Backend: Node.js, Express.js.

Database: MongoDB Atlas (Cloud NoSQL).

Frontend: EJS (Embedded JavaScript), Bootstrap 5, CSS3.

Validation: Schema validation using Joi to ensure data integrity.

Storage: Multer & Cloudinary for handling multipart/form-data (images).

📁 Repository Structure
Plaintext
WanderLust/
├── controllers/    # Logic for routes
├── models/         # Mongoose Schemas (Listing, Review, User)
├── public/         # Static assets (Stylesheets, Client-side JS)
├── routes/         # Express router files
├── views/          # EJS templates for UI
└── app.js          # Server entry point & Middleware config
🔧 Installation
To run this project locally, follow these steps:

Clone the repository:

Bash
git clone https://github.com/AyeshaFatiima/WanderLust.git
Install dependencies:

Bash
npm install
Set up your .env file with the following keys:

ATLASDB_URL (MongoDB Connection String)

SECRET (Session Secret)

CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET (Cloudinary Credentials)

MAPBOX_TOKEN (Optional: Mapbox Public Key)

Start the server:

Bash
node app.js
