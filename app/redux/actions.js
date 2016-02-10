/*
 * action types
 */

export const SIGNIN = 'SIGNIN';

/*
 * action creators
 */

export function signin(username) {
    return { type: SIGNIN, username };
}
