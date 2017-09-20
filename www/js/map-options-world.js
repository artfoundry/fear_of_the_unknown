let MapOptionsWorld = {
    "areas" : [
        {
            "name" : "Library",
            "width" : 10,
            "height" : 10,
            "tileSize" : 64,
            "randomization" : 1.0, // determines what type of tile is chosen - lower values = more walls
            "map" : {
                "row1"  : ["wall",  "wall",  "wall",  "floor", "floor", "floor", "wall",  "floor", "floor", "floor"],
                "row2"  : ["floor", "floor", "wall",  "floor", "floor", "floor", "wall",  "floor", "wall",  "floor"],
                "row3"  : ["floor", "floor", "wall",  "floor", "floor", "floor", "wall",  "floor", "wall",  "floor"],
                "row4"  : ["floor", "wall",  "wall",  "wall",  "floor", "wall",  "wall",  "floor", "floor", "floor"],
                "row5"  : ["floor", "wall",  "wall",  "wall",  "floor", "wall",  "wall",  "wall",  "wall",  "floor"],
                "row6"  : ["floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor"],
                "row7"  : ["wall",  "wall",  "floor", "wall",  "floor", "wall",  "wall",  "wall",  "wall",  "floor"],
                "row8"  : ["floor", "floor", "floor", "wall",  "floor", "floor", "floor", "wall",  "floor", "floor"],
                "row9"  : ["floor", "wall",  "floor", "wall",  "floor", "floor", "floor", "wall",  "floor", "floor"],
                "row10" : ["floor", "floor", "floor", "wall",  "wall",  "wall",  "floor", "wall",  "floor", "floor"]
            },
            "objects" : {
                "doorMain" : {
                    "itemType" : "door",
                    "questName": null,
                    "tileType" : "walkable",
                    "location" : "row6col1",
                    "image" : "door",
                    "func" : "displayStatus",
                    "message" : "leaveBuilding"
                },
                "stairsDown" : {
                    "itemType" : "stairs",
                    "questName": null,
                    "tileType" : "walkable",
                    "location" : "bottom",
                    "image" : "stairs-down",
                    "func" : "nextLevel"
                }
            },
            "items" : {
                "lantern": {
                    "itemType": "questItems",
                    "questName": "lantern",
                    "tileType" : "item",
                    "location": "row8col2",
                    "image": "lantern",
                    "func" : null
                },
                "shotgun": {
                    "itemType": "questItems",
                    "questName": "shotgun",
                    "tileType" : "item",
                    "location": "row8col1",
                    "image": "shotgun",
                    "func" : null
                }
            }
        }
    ],
    "playerOptions" : {
        "player1" : {
            "name" : "Player1",
            "type" : "player",
            "subtype" : "investigator",
            "startPos" : "row1col1",
            "startingLevel" : "Library", // 0 because levels is an array starting at index 0
            "startingQuest" : "lantern",
            "health" : 3,
            "sanity" : 20
        }
    },
    "monsterOptions" : {
        "shoggoth1" : {
            "name" : "Shoggoth",
            "type" : "monster",
            "subtype" : "shoggoth",
            "health" : 1,
            "startingLevel" : "Library",
            "location" : "row2col2",
            "questGoal" : false,
            "questName" : ""
        }
    }
};
