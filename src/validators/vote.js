import { validateOption } from './option.js';

export function validateVote({ id, title, description, options, creator, timestamp, duration, deadline }) {
    validateId(id);
    validateTitle(title);
    validateDescription(description);
    validateOptions(options);
    validateCreator(creator);
    validateTimestamp(timestamp);
    validateDuration(duration); // not required
    validateDeadline(deadline);
}

function validateId(id) {
    if(id != null)
        throw "Vote Id needs to be empty. It will be created once the message is sent.";
}

function validateTitle(title) {
    if(title == null)
        throw "Vote Title cannot be null.";
    if(title.length < 3)
        throw "Vote Title needs to be at least 3 characters.";
    if(title.length > 20)
        throw "Vote Title needs to be less than 20 characters.";
}

function validateDescription(description) {
    if(description == null)
        throw "Vote Description cannot be null.";
    if(description.length < 10)
        throw "Vote Description needs to be at least 10 characters.";
    if(description.length > 256)
        throw "Vote Description needs to be less than 256 characters.";
}

function validateOptions(options) {
    if(options == null)
        throw "Vote Options cannot be null.";
    if(options.length < 2)
        throw "Vote There needs to be at least 2 options";
    if(options.length > 15)
        throw "Vote There can only be at most 15 options";
    
    options.forEach(option => validateOption(option));
}

function validateCreator(creator) {
    if(creator == null)
        throw "Vote Creator cannot be null.";
}

function validateTimestamp(timestamp) {
    if(timestamp != null)
        throw "Vote Timestamp needs to be empty. It will be created once the message is sent.";
}

function validateDuration(duration) {
    if(duration == null) return;

    if(!duration.match(/[1-9][0-9]*[yMwdhms]/))
        throw "Vote Duration is malformed. Should be like <AMOUNT><y|M|w|d|h|m|s> (year, month, week, day, hour, minute, second)";
}

function validateDeadline(deadline) {
    if(deadline != null)
        throw "Vote Deadline needs to be empty. It will be created once the message is sent.";
}
