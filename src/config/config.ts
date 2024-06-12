import "dotenv/config";
const config = {
  port: process.env.PORT || 5000,
  db_url: process.env.DB_URL
};

export default config;
