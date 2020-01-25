const Article = require("../models/articlesData");
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = {
    scrapeArticles: (req, res) => {
        axios.get("https://finance.yahoo.com/news/")
            .then((response) => {

                const $ = cheerio.load(response.data);
                const results = [];
                //Loops through each article title on the requested link
                $("h3").each(function (i, element) {

                    const title = $(element).text();
                    const link = $(element).children().attr("href");
                    const summary = $(element).next("P").text();

                    results.push({
                        title: title,
                        link: "https://finance.yahoo.com" + link,
                        summary: summary
                    });
                });
                console.log(results);
                res.render("index", {articles: results });
            })
            .catch(err => console.log('scrapeArticles error: ' + err));
    },
    savedArticles: (req, res) => {
        Article.find({})
        .then((dataArr) => {
            console.log(dataArr)
            res.render("saved", {articles: dataArr.reverse()})

        })
        .catch(err => console.log('savedArticles error: ' + err))
    }
}