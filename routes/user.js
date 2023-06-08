const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../data/db");

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme","Programlama", "Mobil Uygulamalar","Veri Analizi", "Ofis Uygulamaları"],
    blogs:[
        {
            blog_id:1,
            baslik: "Komple Uygulamalı Web Geliştirme",
            aciklama: "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim: "1.jpeg",
            anasayfa: false,
            onay: true
        },
        {
            blog_id:2,
            baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
            aciklama: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
            resim: "2.jpeg",
            anasayfa: false,
            onay: true
        },
        {
            blog_id:3,
            baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+ ",
            aciklama: "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
            resim: "3.jpeg",
            anasayfa: true,
            onay: true
        },
        {
            blog_id:4,
            baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
            aciklama: "Node.js ile sıfırdan ileri seviye dinamik web uygulaması geliştirmeyi öğren.",
            resim: "4.jpeg",
            anasayfa: true,
            onay: true
        }
    ]
}


router.use("/blogs/:blogid", function(req, res) {
    res.render("users/blog-details");
});

router.use("/blogs", function(req, res) {
    db.execute("select * from blog")
    .then(result => {
        res.render("users/blogs", {
            title: "Tüm Kurslar",
            blogs: result[0],
            categories: data.categories
        });
    })
    .catch(err => console.log(err));
});

router.use("/", function(req, res) {
    db.execute("select * from blog")
    .then(result => {
        res.render("users/index", {
            title: "Popüler Kurslar",
            blogs: result[0],
            categories: data.categories
        });
    })
    .catch(err => console.log(err));
});

module.exports = router;