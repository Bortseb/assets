// example register.js module for crazy.fed.wiki demo

import * as fs from 'node:fs';
import * as path from 'node:path';

export function post(argv, data, done) {
  const domain = data?.domain || 'none'
  // error if improper domain. 
  // error if domain already exists
  // create directory, error if fail
  // count total sub-directories, return count
  fs.appendFile(path.join(argv.status,'register.txt'), `${domain}\n`, (err) => {
    if(err) return done(err)
    fs.readFile(path.join(argv.status,'register.txt'),'utf8',(err, text) => {
      if(err) return done(err)
      const count = text.trim().split(/\n/).length
      done(null,`${count} members in queue\n`)
    })
  })
}

export function get(argv, done) {
  // return list of subdirectories
  fs.readFile(path.join(argv.status,'register.txt'),'utf8',(err, text) =>
    done(err, text||'none'))
}
