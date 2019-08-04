const fs = require("fs");

const buildNumber = process.argv[2];

// Check if all parameters were given and the passed files do exist
if (buildNumber === undefined) {
    console.log("Error: please provide a version number");
    return
}

if (typeof buildNumber !== "number" || buildNumber.split(".").length !== 1) {
    console.log("Error: the provided version number is not a valid number")
}

const jsonFiles = [
    [
        "package.json",
        "version"
    ], [
        "client/package.json",
        "version"
    ], [
        "server/package.json",
        "version"
    ], [
        "client/config.json",
        "clientVersion"
    ], [
        "server/config.json",
        "serverVersion"
    ]
];

for (let fileData in jsonFiles) {
    let filePath = fileData[0];
    let jsonFileKey = fileData[1];

    let data = require('./' + filePath);
    let lastVersion = data[jsonFileKey];
    let majorMinorVersion = lastVersion.split(".").slice(0,1);
    let newVersion = majorMinorVersion + '.' + buildNumber;
    data[jsonFileKey] = newVersion;

    // write it to the file
    fs.writeFile("./" + filePath, JSON.stringify(data, null, "\t"), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file: ", filePath, " was successfully saved!");
    });
}

