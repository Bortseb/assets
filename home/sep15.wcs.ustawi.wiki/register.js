// example register.js module for crazy.fed.wiki demo

import * as fs from 'node:fs';
import * as path from 'node:path';
const parent = 'sep15.wcs.ustawi.wiki'
export function post(argv, data, done) {
  const domain = data?.domain || 'none'
  // error if improper domain. 
  // error if domain already exists
  // create directory, error if fail ✅
  // count total sub-directories, return count
  const sites = argv.data.split("/").slice(0, -1).join("/")
  fs.mkdir(path.join(sites, domain), (err, path) => {
    if (err) return done(err, "can't create site, possible duplicate?")
    done(null, "Good work!")
  })


  // fs.appendFile(path.join(argv.status,'register.txt'), `${domain}\n`, (err) => {
  //   if(err) return done(err)
  //   fs.readFile(path.join(argv.status,'register.txt'),'utf8',(err, text) => {
  //     if(err) return done(err)
  //     const count = text.trim().split(/\n/).length
  //     done(null,`${count} members in queue\n`)
  //   })
  // })
}

export function get(argv, done) {
  // return list of subdirectories one level deep
  const sites = argv.data.split("/").slice(0, -1).join("/")
  fs.readdir(path.join(sites), 'utf8', (err, files) => {
    const have = files.filter(file => file.endsWith("." + parent))
    done(err, have.join("\n") || 'none')
  }
  )
}