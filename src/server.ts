import mongoose from 'mongoose'
import config from './config/config'
import app from './app'

async function main() {
  await mongoose.connect(config.db_url as string)
  app.listen(config.port, () => {
    console.log(`achieve flow server listening on port ${config.port}`)
  })
}
main().catch(err => console.log(err))
