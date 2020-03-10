'use strict';

const ansi = require('ansi-colors');

function log(type, infos) {

    const lines = {
        1: ansi.yellow(`[DEBUG] LOGIN IN ${ansi.yellowBright(`${infos.email}:${infos.pwd}`.toUpperCase())}`),
        2: ansi.red(`[INFO] ERROR CONNECTING ${ansi.yellow(`${infos.email}:${infos.pwd}`.toUpperCase())}`),
        3: ansi.cyan(`[INFO] ID COURSE: ${ansi.blue(`${infos.id}`)} | SLUG: ${ansi.blue(`${infos.slug}`.toUpperCase())} | NAME: ${ansi.blue(`${infos.name}`.toUpperCase())} | COURSE TIME: ${ansi.blue(`${infos.totalVideoTime}`)}`),
        4: ansi.green(`[INFO] TITLE DOWNLOAD: ${ansi.greenBright(`${infos.title}`.toUpperCase())}`),
        5: ansi.cyan(`[INFO] LESSON DOWNLOAD: ${ansi.cyanBright(`${infos.lesson}`.toUpperCase())} | ID LESSON: ${ansi.cyanBright(`${infos.id}`)}`),
        6: ansi.green(`[INFO] LOGIN SUCCESS ${ansi.greenBright(`${infos.email}:${infos.pwd}`.toUpperCase())}`),
        7: ansi.yellow(`[DEBUG] GET COURSE`),
        8: ansi.yellow(`[DEBUG] PARSE COURSE`),
        9: ansi.yellow(`[DEBUG] DOWNLOADED TITLE: ${ansi.yellowBright(`${infos.title}`.toUpperCase())}`),
    }

    console.log(lines[type]);
    return;

}

module.exports = {
    log
}