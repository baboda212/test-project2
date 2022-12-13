//index.js
//express 모듈 추가
const express = require('express');
const app = express();
//포케몬 데이터 : 이름, 이미지 
const pokemons = [  
    {
        name: "이상해씨",
        imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png"
    },
    {
        name: "파이리",
        imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png"
    },
    {
        name: "꼬부기",
        imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png"
    },
    {
        name: "피카츄",
        imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png"
    }
]

//pokemon요청
app.get('/pokemon/:id', (req, res) => {
    //req.params 클라이언트 요청 변수값
    console.log(req.params);

    //포케몬의 번호(id), 이름과 이미지 같이 보여주기
    /* res.send(`<h1>${pokemons[req.params.id].name}</h1><img src= ${pokemons[req.params.id].imgUrl} alt='${req.params.id}'/>`) */
    const html = `
    <img src='${pokemons[req.params.id].imgUrl}' alt='${pokemons[req.params.id].imgUrl}' />
    <h3>${pokemons[req.params.id].name}</h3>
    `
    res.send(html);
});

//get 요청(라우팅)
app.get('/', (요청, 응답) => {
    //응답.send('home으로 접속'); 간단하게 클라이언트에게 메세지 보낼떄 사용
    응답.sendFile(__dirname + '/pages/index.html');
});

//about으로 접속하면 about.html파일 보내기
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html');
})

app.get('/tea', (req, res) =>{
    res.sendFile(__dirname + '/pages/tea.html');
})
app.get('/coffee', (req, res) =>{
    res.sendFile(__dirname + '/pages/coffee.html');
})
//404 : 마지막 라우터에 작성
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/pages/404.html')
})
//서버오픈(포트번호)
app.listen(3000, function(){
    console.log(`서버가 열림`);
});