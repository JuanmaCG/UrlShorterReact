import { ShortenResponse } from "./shortenResponse";

export interface ApiResult {
    data: ShortenResponse | null;
    error: {
        message: string;
        type: string;
    } | null;
}