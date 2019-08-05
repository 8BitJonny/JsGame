const fs = require("fs");

const buildNumber = process.argv[2];

// Check if all parameters were given and the passed files do exist
if (buildNumber === undefined) {
    console.log("Error: please provide a version number");
    return
}

if (typeof parseInt(buildNumber) !== "number" || buildNumber.split(".").length !== 1) {
    console.log(typeof buildNumber);
    console.log(buildNumber.split(".").length);
    console.log("Error: the provided version number '",buildNumber, "' is not a valid number")
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

jsonFiles.forEach(function(fileData) {
    let filePath = fileData[0];
    let jsonFileKey = fileData[1];

    let data = require('./' + filePath);
    let lastVersion = data[jsonFileKey];
    let majorMinorVersion = lastVersion.split(".").slice(0,2);
    let newVersion = majorMinorVersion.join(".") + '.' + buildNumber;
    data[jsonFileKey] = newVersion;

    // write it to the file
    fs.writeFile("./" + filePath, JSON.stringify(data, null, "\t"), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file: ", filePath, " was successfully saved with the new version of: ", newVersion);
    });
});

