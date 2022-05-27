function one(console) {
    const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    for (counter = 0; counter < names.length; counter++) {
        console.log(names[counter]);
    }
}

function two(console) {
    const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    names.forEach(function (name) {
        console.log(name);
    });
}

function three() {
    const newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{id: 432534, time: 65876586}]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{id: 432534, time: 65876586}]
    }], videoAndTitlePairs = [];

    newReleases.forEach(release => {
        const {id, title} = release
        videoAndTitlePairs.push({id, title})

    })

    return videoAndTitlePairs;
}

function four() {
    Array.prototype.map = function (projectionFunction) {
        const results = [];
        this.forEach(function (itemInArray) {
            results.push(projectionFunction(itemInArray));

        });

        return results;
    };

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
}

function five() {

    const newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{id: 432534, time: 65876586}]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{id: 432534, time: 65876586}]
    }];

    return newReleases.map((release) => {
        const {id, title} = release
        return {id, title}
    })


}

function six() {

    const newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }], videos = [];

    newReleases.forEach((release) => {
        const {rating} = release
        if (rating === 5.0) {
            videos.push(release);
        }
    });

    return videos;

}

function seven() {
    Array.prototype.filter = function (predicateFunction) {
        const results = [];
        this.forEach(function (itemInArray) {
            if (predicateFunction(itemInArray)) {
                results.push(itemInArray);
            }
        });

        return results;
    };

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

}

function eight() {
    const newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }];

    return newReleases.filter((release) => {
        return release.rating === 5.0;
    }).map((release) => {
        return release.id;
    });
}

function nine() {
    const movieLists = [{
        name: "New Releases", videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }, {
        name: "Dramas", videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }], allVideoIdsInMovieLists = [];

    movieLists.forEach((releaseList) => {
        releaseList.videos.forEach((video) => {
            allVideoIdsInMovieLists.push(video.id);
        });
    });

    return allVideoIdsInMovieLists;

}

function ten() {
    Array.prototype.concatAll = function () {
        const results = [];
        this.forEach((newArray) => {
            results.push.apply(results, newArray);
        });

        return results;
    };

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

}

function eleven() {
    const movieLists = [{
        name: "New Releases", videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }, {
        name: "Dramas", videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }];

    return movieLists.map((movieList) => {
        return movieList.videos.map((video) => {
            return video.id;
        });
    }).concatAll();

}

function twelve() {
    const movieLists = [{
        name: "Instant Queue", videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [{
                width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [{
                width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
            }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"}

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }, {
        name: "New Releases", videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [{
                width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [{
                width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}, {
                width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }];

    return movieLists.map((movieList) => {
        return movieList.videos.map((video) => {
            return video.boxarts.filter((boxart) => {
                const {height, width} = boxart
                return width === 150 && height === 200;
            }).map((boxart) => {
                const {id, title} = video
                return {id, title, boxart: boxart.url};
            });
        }).concatAll();
    }).concatAll();

}

function thirteen() {
    Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
        return this.map((obj) => {
            return projectionFunctionThatReturnsArray(obj);
        }).concatAll();
    };
}

function fourteen() {
    {
        const movieLists = [{
            name: "Instant Queue", videos: [{
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [{
                    width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
                }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            }, {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [{
                    width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
                }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"}

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            }]
        }, {
            name: "New Releases", videos: [{
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [{
                    width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
                }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            }, {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [{
                    width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
                }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}, {
                    width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
                }],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            }]
        }];

        return movieLists.concatMap((movieList) => {
            return movieList.videos.concatMap((video) => {
                return video.boxarts.filter((boxart) => {
                    return boxart.width === 150 && boxart.height === 200;
                }).map((boxart) => {
                    const {id, title} = video
                    return {id, title, boxart: boxart.url};
                });
            });
        });
    }

}

function fifteen() {
    const boxarts = [{
        width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}, {
        width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"}]
    let currententSize, maxSize = -1, largestBoxart;

    boxarts.forEach((boxart) => {
        const {width, height} = boxart
        currententSize = width * height;
        if (currententSize > maxSize) {
            largestBoxart = boxart;
            maxSize = currententSize;
        }
    });

    return largestBoxart;
}

function sixteen() {
    // [1,2,3].reduce(function(accumulatedumulatedValue, currententValue) { return accumulatedumulatedValue + currententValue; }); === [6];
// [1,2,3].reduce(function(accumulatedumulatedValue, currententValue) { return accumulatedumulatedValue + currententValue; }, 10); === [16];

    Array.prototype.reduce = function (combiner, initialValue) {
        let counter, accumulatedumulatedValue;

        // If the array is empty, do nothing
        if (this.length === 0) {
            return this;
        } else {
            // If the user didn't pass an initial value, use the first item.
            if (arguments.length === 1) {
                counter = 1;
                accumulatedumulatedValue = this[0];
            } else if (arguments.length >= 2) {
                counter = 0;
                accumulatedumulatedValue = initialValue;
            } else {
                throw "Invalid arguments.";
            }

            // Loop through the array, feeding the currentent value and the result of
            // the previous computation back into the combiner function until
            // we've exhausted the entire array and are left with only one value.
            while (counter < this.length) {
                accumulatedumulatedValue = combiner(accumulatedumulatedValue, this[counter])
                counter++;
            }

            return [accumulatedumulatedValue];
        }
    };

}

function seventeen() {
    const ratings = [2, 3, 1, 4, 5];

    return ratings.reduce((accumulatedumulated, currentent) => {
        if (accumulatedumulated > currentent) {
            return accumulatedumulated;
        } else {
            return currentent;
        }
    });
}

function eighteen() {

    const boxarts = [{
        width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}, {
        width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"}];
    return boxarts.reduce((accumulated, current) => {
        if (accumulated.width * accumulated.height > current.width * current.height) {
            return accumulated;
        } else {
            return current;
        }
    }).map((boxart) => {
        return boxart.url;
    });
}

function nineteen() {
    const videos = [{
        "id": 65432445, "title": "The Chamber"
    }, {
        "id": 675465, "title": "Fracture"
    }, {
        "id": 70111470, "title": "Die Hard"
    }, {
        "id": 654356453, "title": "Bad Boys"
    }];


    return videos.reduce((accumulatedumulatedMap, video) => {
            let obj = {};
            obj[video.id] = video.title;
            return Object.assign(accumulatedumulatedMap, obj);
        },

        {});
}

function twenty() {
    const movieLists = [{
        name: "New Releases", videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [{
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
            }, {width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }, {
        name: "Thrillers", videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [{
                width: 130,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            }, {width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"}, {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{id: 432534, time: 65876586}]
        }]
    }];


    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatMap((movieList) => {
        return movieList.videos.concatMap((video) => {
            return video.boxarts.reduce((accumulated, current) => {
                if (accumulated.width * accumulated.height < current.width * current.height) {
                    return accumulated;
                } else {
                    return current;
                }
            }).map((boxart) => {
                const {id, title} = video
                return {id, title, boxart: boxart.url};
            });
        });
    });

}

function twentyOne() {
    const videos = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }], bookmarks = [{id: 470, time: 23432}, {id: 453, time: 234324}, {id: 445, time: 987834}]
    let counter, videoIdAndBookmarkIdPairs = [];

    for (counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
        videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
    }

    return videoIdAndBookmarkIdPairs;
}

function twentyTwo() {
    // JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

    Array.zip = (left, right, combinerFunction) => {
        let counter, results = [];

        for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
            results.push(combinerFunction(left[counter], right[counter]));
        }

        return results;
    };

}

function twentyThree() {
    let videos = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }, {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }], bookmarks = [{id: 470, time: 23432}, {id: 453, time: 234324}, {id: 445, time: 987834}];

    return Array.zip(videos, bookmarks, (video, bookmark) => {
        return {videoId: video.id, bookmarkId: bookmark.id};
    });
}

function twentyFour() {
    const movieLists = [{
        name: "New Releases", videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [{
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "interestingMoments": [{type: "End", time: 213432}, {type: "Start", time: 64534}, {
                type: "Middle",
                time: 323133
            }]
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
            }, {width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "interestingMoments": [{type: "End", time: 54654754}, {type: "Start", time: 43524243}, {
                type: "Middle",
                time: 6575665
            }]
        }]
    }, {
        name: "Instant Queue", videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [{
                width: 130,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
            }, {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "interestingMoments": [{type: "End", time: 132423}, {type: "Start", time: 54637425}, {
                type: "Middle",
                time: 3452343
            }]
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            }, {width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"}, {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "interestingMoments": [{type: "End", time: 45632456}, {type: "Start", time: 234534}, {
                type: "Middle",
                time: 3453434
            }]
        }]
    }];

    //------------ COMPLETE THIS EXPRESSION --------------
    return movieLists.concatMap((movieList) => {
        return movieList.videos.concatMap((video) => {
            return Array.zip(video.boxarts.reduce(function (accumulated, current) {
                if (accumulated.width * accumulated.height < current.width * current.height) {
                    return accumulated;
                } else {
                    return current;
                }
            }), video.interestingMoments.filter((interestingMoment) => {
                return interestingMoment.type === "Middle";
            }), (boxart, interestingMoment) => {
                const {id, title} = video
                return {id, title, time: interestingMoment.time, url: boxart.url};
            });
        });
    });
}

function twentyFive() {
    const lists = [{
        "id": 5434364, "name": "New Releases"
    }, {
        "id": 65456475, name: "Thrillers"
    }], videos = [{
        "listId": 5434364, "id": 65432445, "title": "The Chamber"
    }, {
        "listId": 5434364, "id": 675465, "title": "Fracture"
    }, {
        "listId": 65456475, "id": 70111470, "title": "Die Hard"
    }, {
        "listId": 65456475, "id": 654356453, "title": "Bad Boys"
    }];

    return lists.map((list) => {
        return {
            name: list.name, videos: videos.filter((video) => {
                return video.listId === list.id;
            }).map((video) => {
                const {id, title} = video
                return {id, title};
            })
        };
    });
}

function twentyFive() {
    const lists = [{
        "id": 5434364, "name": "New Releases"
    }, {
        "id": 65456475, name: "Thrillers"
    }], videos = [{
        "listId": 5434364, "id": 65432445, "title": "The Chamber"
    }, {
        "listId": 5434364, "id": 675465, "title": "Fracture"
    }, {
        "listId": 65456475, "id": 70111470, "title": "Die Hard"
    }, {
        "listId": 65456475, "id": 654356453, "title": "Bad Boys"
    }];

    return lists.map((list) => {
        return {
            name: list.name, videos: videos.filter((video) => {
                return video.listId === list.id;
            }).map((video) => {
                const {id, title} = video
                return {id, title};
            })
        };
    });
}

function twentySix() {
    const lists = [{
            "id": 5434364, "name": "New Releases"
        }, {
            "id": 65456475, name: "Thrillers"
        }], videos = [{
            "listId": 5434364, "id": 65432445, "title": "The Chamber"
        }, {
            "listId": 5434364, "id": 675465, "title": "Fracture"
        }, {
            "listId": 65456475, "id": 70111470, "title": "Die Hard"
        }, {
            "listId": 65456475, "id": 654356453, "title": "Bad Boys"
        }], boxarts = [{
            videoId: 65432445,
            width: 130,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
        }, {
            videoId: 65432445,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
        }, {
            videoId: 675465,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
        }, {
            videoId: 675465,
            width: 120,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
        }, {
            videoId: 675465,
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
        }, {
            videoId: 70111470,
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
        }, {
            videoId: 70111470,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
        }, {
            videoId: 654356453,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
        }, {videoId: 654356453, width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"}],
        bookmarks = [{videoId: 65432445, time: 32432}, {videoId: 675465, time: 3534543}, {
            videoId: 70111470,
            time: 645243
        }, {videoId: 654356453, time: 984934}];

    return lists.map(function (list) {
        const {name} = list
        return {
            name, videos: videos.filter((video) => {
                return video.listId === list.id;
            }).concatMap((video) => {
                return Array.zip(bookmarks.filter((bookmark) => {
                    return bookmark.videoId === video.id;
                }), boxarts.filter((boxart) => {
                    return boxart.videoId === video.id;
                }).reduce((acc, curr) => {
                    return acc.width * acc.height < curr.width * curr.height ? acc : curr;
                }), (bookmark, boxart) => {
                    const {id, title} = video
                    const {time} = bookmark
                    return {id, title, time, boxart: boxart.url};
                });
            })
        };
    });

};
function twentySeven(pricesNASDAQ, printRecord) {
    let microsoftPrices,
        now = new Date(),
        tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

    // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
    microsoftPrices =
        pricesNASDAQ.
        filter((priceRecord) => {
            return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
        });

    // Print the trades to the output console
    microsoftPrices.
    forEach((priceRecord) => {
        printRecord(priceRecord);
    });
}

function twentyEight(button) {
    // the button click handler
    var handler = function(ev) {
        // Unsubscribe from the button event.
        button.removeEventListener("click", handler);

        alert("Button was clicked. Unsubscribing from event.");
    };

    // add the button click handler
    button.addEventListener("click", handler);
}

function twentyNine(button) {
    var buttonClicks = Observable.fromEvent(button, "click");

    var subscription =
        buttonClicks.
        do(function(clickEvent) {
            alert("Button was clicked. Stopping Traversal.");

            // Stop traversing the button clicks
            subscription.unsubscribe();
        }).
        subscribe();
}


function thirty(button) {
    var buttonClicks = Observable.fromEvent(button, "click");

    // Use take() to listen for only one button click
    // and unsubscribe.
    buttonClicks.
    take(1).
    forEach(function() {
        alert("Button was clicked once. Stopping Traversal.");
    });
}



