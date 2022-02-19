import { Schema, model} from 'mongoose';
import { FullPlayer  } from 'hltv';
const PlayerSchema = new Schema({
    id: Number,
    name: String,
    ign: String,
    image: String,
    age: Number,
    country: {
        name: String,
        code: String,
    },
    team: {
        name: String,
        id: Number,
    },
    twitter: String,
    twitch: String,
    facebook: String,
    instagram: String,
    statistics: {
        rating: Number,
        killsPerRound: Number,
        headshots: Number,
        mapsPlayed: Number,
        deathsPerRound: Number,
        roundsContributed: Number
    },
    teams: [{
        name: String,
        id: Number,
    }],
    achievements: [{
        event: {
            name: String,
            id: Number
        },
        place: String
    }]
},{
    timestamps: true
})

export default model<FullPlayer>('Player', PlayerSchema);