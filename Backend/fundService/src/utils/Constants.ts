import {ProvidentService} from "../services/providentService";
import * as process from "process";

export const NODE_ENV = process.env.NODE_ENV ?? 'local';
export const AWS_REGION = process.env.AWS_REGION ?? 'eu-central-1';
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID ?? 'test';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY ?? 'test';
export const AWS_ENDPOINT = process.env.AWS_ENDPOINT ?? '';
export const APP_PORT = process.env.APP_PORT ?? '3004';
export const GOVERNMENT_BASE_URL = process.env.GOVERNMENT_BASE_URL ?? 'https://data.gov.il/api/3/action/datastore_search'
