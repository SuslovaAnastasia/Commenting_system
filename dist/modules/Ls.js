CommentSystem = 80

let h = [
    {
        "commentID": 0,
        "comment": {
            "commentNickname": "Алексей_1994b",
            "commentAvaPath": "../src/img/Alex user.png",
            "commentTime": {
                "fullDate": "2023-04-03T02:42:50.000Z",
                "displayDate": "15.01 13:55"
            },
            "commentText": "Самое обидное когда сценарий по сути есть - в виде книг,                                где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и                                экранизировать оригинал как это было в                                первых фильмах с                                минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал,            однако вместо этого                                'Кольца власти' просто позаимствовали имена из оригинала,            куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз                                в лучшем случае."
        },
        "replyes": {
            "reply_0": {
                "commentID": 2,
                "replyID": 0,
                "nickname": "Джунбокс3000",
                "preNickname": "Алексей_1994b",
                "ava": "../src/img/Junior user.png",
                "date": {
                    "fullDate": "2023-04-03T02:43:16.000Z",
                    "displayDate": "15.01 15:18"
                },
                "replyText": "Наверное, самая большая ошибка создателей сериала                                была в том, что они поставили                                уж слишком много надежд на поддержку фанатов вселенной.Как оказалось на деле, большинство                                'фанатов'                                с самой настоящей яростью и желчью стали уничтожать сериал, при этом объективности в отзывах                                самый минимум.",
                "rating": 3
            },
            "reply_1": {
                "commentID": 2,
                "replyID": 1,
                "nickname": "Мистер_душнила",
                "preNickname": "Алексей_1994b",
                "ava": "../src/img/Mister.png",
                "date": {
                    "fullDate": "2023-04-03T02:43:16.000Z",
                    "displayDate": "11.02 15:02"
                },
                "replyText": "Какую-то дичь несешь, братиш!",
                "rating": -5
            }

        },
        "rating": 6
    },

];

u = {
    "userNickName": "Максим Авдеенко",
    "userAva": "../src/img/Maks user.png",
    "favorites": {}
}

let currentData = localStorage.getItem('DATA');

if (!currentData) {
    currentData = {
        history: h,
        user: u
    }

    localStorage.setItem('DATA', JSON.stringify(currentData))
}