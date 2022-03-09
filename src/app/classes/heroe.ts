import { GROUP_COLORS } from './group-colors';
export class Heroe {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public modified: Date,
        public thumbnailURI: string,
        public team: string,
        public color: string
    ) {  }
}
