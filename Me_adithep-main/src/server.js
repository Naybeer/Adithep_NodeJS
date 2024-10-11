const express = require('express')
const path =require('path')
const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
    
    
});

app.listen(8080, () => {
    console.log('server is listening on port 8080');
}

)
app.listen(8080,'172.20.10.2' , () =>{
    console.log('server is listening on port 8080')
    // เพิ่มเติมเอาไว้ใช้เข้า ใน lan เดียวกัน
}
);