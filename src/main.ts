import { connect } from "mongoose"

connect("mongodb://127.0.0.1:27017/StackOverflowDB")
	.then(() => console.log("Hello World!"))

console.log("StackOverflowAPIClone")
