// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function handler(req, res) {
  let allData = []
  let fileName = await fs.promises.readdir('blogdata', 'utf-8');
  for (let index = 0; index < fileName.length; index++) {
    const element = fileName[index];
    let newData = await fs.promises.readFile(`blogdata/${element}`, 'utf-8')
    allData.push(JSON.parse(newData))
  }
  res.status(200).json(allData)
}
