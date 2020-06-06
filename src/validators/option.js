export function validateOption({ id, title, emote }) {
    validateId(id);
    validateTitle(title);
    validateEmote(emote);
}

function validateId(id) {
    if(id != null)
        throw "Option Id needs to be empty. It will be created once the message is sent.";
}

function validateTitle(title) {
    if(title == null)
        throw "Option Title cannot be null.";
    if(title.length < 3)
        throw "Option Title needs to be at least 3 characters.";
    if(title.length > 50)
        throw "Option Title needs to be less than 50 characters.";
}

function validateEmote(emote) {
    if(emote == null)
        throw "Option Emote cannot be null.";
}
