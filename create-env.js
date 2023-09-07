const fs = require('fs')

const run = async () => {
  fs.existsSync('.env') ||
    fs.writeFileSync(
      '.env',
      `REACT_APP_API_URL=https://stage.api.hypernative.xyz
REACT_APP_TIMEOUT=5000
REACT_APP_ENV=stage 
  `,
    )
}

run().catch(() => process.exit(1))
