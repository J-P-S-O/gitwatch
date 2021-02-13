#!/usr/bin/env node

import chalk from "chalk"
import chokidar from "chokidar"
import spawner from "./../src/run-tool.js"
import index from "./../src/index.js"
console.log("Spawning git commit...")
spawner("git add *", ()=>{
	spawner("git commit -m \"Gitwatcher_initial_commit\"", (code)=>{
		console.log("Git spawner exited	with "+code)
		console.log("Initializing chokidar...")
	})
})
chokidar.watch('.').on('all', (event, path) => {
  console.log(event, path);
  spawner("git add *", ()=>{
	  spawner("git commit -m "+ event+String(path).replace(" ","_"), (code)=>{
		  console.log("Git exited with "+chalk.green(code))
	  } )
  })
});