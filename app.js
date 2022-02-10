const PORT = 8000
const axios = require("axios")
const cheerio = require("cheerio");
const { response } = require("express");
const express = require('express')

const app = express()

const http = require('http');
const { listenerCount } = require("process");

const url = 'https://news.sky.com/uk'

axios(url)
    .then(response  => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.sdc-site-tile__headline-text', html).each(function(){
           const title = $(this).text() 
           articles.push({
               title
           })
        })

        console.log(articles)

    }).catch(err => console.log(err))
    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))