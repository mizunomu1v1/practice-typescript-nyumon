// npm install fastify
import fastify  from "fastify";

const app = fastify();

app.get('/',(req,reply)=>{
  reply.send("Hello,world!")
});
