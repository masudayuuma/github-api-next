// atom.js

import { atom } from 'recoil';

export const usernameState = atom({
    key: 'usernameState',
    default: '',
});

export const emailState = atom({
    key: 'emailState',
    default: '',
});

export const userState = atom({
    key: 'userState',
    default: null,
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(async (newUsername) => {
                try {
                    const response = await fetch(`https://api.github.com/users/${newUsername}`);
                    const userData = await response.json();
                    // You can access the user data here and update the state accordingly
                    console.log(userData);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            });
        },
    ],
});

export const followersState = atom({
    key: 'followersState',
    default: [],
});

export const followingState = atom({
    key: 'followingState',
    default: [],
});

export const reposState = atom({
    key: 'reposState',
    default: [],
});
