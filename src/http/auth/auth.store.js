import {writable} from "svelte/store";

export let authInfo = writable({
    id: null,
    userId: null,
    userName: null,
    email: null,
    firstName: null,
    lastName: null,
    createDate: null,
    role: null,
    detail: {
        mobile: null,
        countryCodeId: null,
        email: null,
        statusId: null,
        positionId: null,
        startDate: null,
        profilePicture: null,
        userProfilePicture : {
            profilePicture: null,
            profilePictureId: null,
            profilePictureStatus: null
        }
    }
});
