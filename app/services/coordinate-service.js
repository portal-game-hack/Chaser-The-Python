'use strict';
const Coordinate = require('../models/coordinate');

/**
 * Coordinate arithmetics
 */
class CoordinateService {

    static getNextCoordinate(currentCoordinate, direction) {
        return new Coordinate(currentCoordinate.x + direction.x,
                               currentCoordinate.y + direction.y);
    }

    static movePlayer(player) {
        if ( (player.direction.x != 0 && player._segments[0].x + player.direction.x === player._segments[1].x ) ||
            (player.direction.y != 0 && player._segments[0].y + player.direction.y === player._segments[1].y ) ) {
            player.direction.x = -player.direction.x;
            player.direction.y = -player.direction.y;
        }
        player.move(this.getNextCoordinate(player.getHeadCoordinate(), player.direction));
    }
}

module.exports = CoordinateService;
