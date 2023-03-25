export enum FetchState{
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export type Race = {
    index: string;
    name: string;
    url: string;
}

export type RacesPostData = {
    count: number;
    results: Array<Race>;
};
