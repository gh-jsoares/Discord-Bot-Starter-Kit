export default class LogEvent {
    static get AUDIT_LOG()           { return 0; }
    static get MEMBER_MUTE_ADD()     { return 1; }
    static get MEMBER_MUTE_REMOVE()  { return 2; }
    static get MEMBER_WARN_ADD()     { return 3; }
    static get MEMBER_WARN_REMOVE()  { return 4; }
}

export default class Log {
    constructor({ id, target_id, user_id, type, changes, reason, options, timestamp }) {
        // AUDIT LOG STUFF
        this.id = id;
        this.timestamp = timestamp;
        // CUSTOM EVENT STUFF
        this.target_id = target_id;
        this.user_id = user_id;
        this.type = type;
        this.reason = reason;
        this.options = options;
    }
};