function incrementalBackups(lastBackupTime, changes) {
    var fileIds = [];
    for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
        var change = changes_1[_i];
        var fileBackuptime = change[0];
        var filedId = change[1];
        if (fileBackuptime > lastBackupTime) {
            if (!fileIds.includes(filedId)) {
                fileIds.push(filedId);
            }
        }
    }
    return fileIds.sort(function (fileId1, fileId2) { return fileId1 - fileId2; });
}
console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]]));
