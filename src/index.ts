import {SMTPServer} from 'smtp-server'
import {simpleParser} from 'mailparser'
const server = new SMTPServer({
    onData : (stream,session,callback)=>{
        simpleParser(stream,(err,mailParsed)=>{
            if(err) console.log(err)
            console.log(mailParsed)
        })
        stream.on("end",callback)
    },
    onRcptTo(address, session, callback) {
         callback()
    },
    onMailFrom(address, session, callback) {
        callback()
    },
    onConnect(session, callback) {
        callback()
    },
})

server.listen(25,()=>{
    console.log("smtp server is up")
})