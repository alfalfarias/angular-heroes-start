import { action as fetchAllAction } from './actions/fetch-all.actions';
import { action as fetchOneAction } from './actions/fetch-one.actions';
import { action as fetchNextAction } from './actions/fetch-next.actions';

export const fetchAll = fetchAllAction;
export const fetchOne = fetchOneAction;
export const fetchNextPage = fetchNextAction;