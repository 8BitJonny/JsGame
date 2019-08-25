/***************************
 * Project: JsGame
 * File: main
 * Created on 2019-08-25
 ***************************/

/**
 * Based on the current shown page to some logic
 *
 * Route "/":
 *  - Focus Start Button and register onSubmit function
 *
 * Route "/login"
 *  - Focus Login Button and register onSubmit function
 *
 * Route "/game"
 *  - Start Game
 */
// TODO
// copy paste old method definition


/**
 * Sets the config defined InHouseRouting Key in local Storage to true
 *
 * The InHouseRouting Token is a boolean that we set ourselves to mark if the
 * user was navigated by us to this page. If e.g. he navigate right to game.html
 * and therefore skipped login page, the token wouldn't be set and we would detect
 * it and redirect him to the homepage.
 */
function setInHouseRoutingToken() {
    // TODO
    // copy paste old method definition
}

/**
 * Sets the config defined InHouseRouting Key in local Storage to true
 *
 * The InHouseRouting Token is a boolean that we set ourselves to mark if the
 * user was navigated by us to this page. If e.g. he navigate right to game.html
 * and therefore skipped login page, the token wouldn't be set and we would detect
 * it and redirect him to the homepage.
 *
 * @returns {string | undefined}
 */
function redirectForNoInHouseRoutingToken() {
    // TODO
    // copy paste old method definition
}