module.exports = (req,res) =>{
    res.send = (data) =>{
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf8' });
        res.end(JSON.stringify(data));
    }
}