export default class Vote {

    constructor({ id, title, description, options, creator, timestamp, duration, deadline }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.options = options;
        this.creator = creator;
        this.timestamp = timestamp;
        this.duration = duration;
        this.deadline = deadline;
    }
    
}