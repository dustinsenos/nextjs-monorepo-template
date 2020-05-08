'use strict'
const path = require('path')
const fs = require('fs')

const outputDir = process.env.OUTPUT_DIR
const projectId = process.env.VERCEL_PROJECT_ID
const orgId = process.env.VERCEL_ORG_ID

if (!outputDir || !projectId || !orgId) {
  console.error('[error] You must define OUTPUT_DIR, VERCEL_PROJECT_ID, and VERCEL_ORG_ID as environment variables')
  process.exitCode = 1
} else {

  let project = {
    "projectId": projectId,
    "orgId": orgId
  }

  let data = JSON.stringify(project)
  let pathWithVercelFolder = path.join(outputDir, '.vercel')
  let filenameIncludingPath = path.join(pathWithVercelFolder, 'project.json')

  console.log("Creating output directory:", pathWithVercelFolder)
  fs.mkdir(pathWithVercelFolder, { recursive: true }, (err) => {
    if (err) if (err) throw err
    console.log("Writing to package.json")
    fs.writeFile(filenameIncludingPath, data, (err) => {
      if (err) throw err
      console.log('Data written to', filenameIncludingPath)
    })
  })
}
