import { Web3Storage, getFilesFromPath } from 'web3.storage'

const token = process.env.API_TOKEN
const client = new Web3Storage({ token })

async function storeFiles () {
  const files = await getFilesFromPath("../iso.iso")
  const cid = await client.put(files)
  console.log(cid)
}

storeFiles()
