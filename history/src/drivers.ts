import {Stream, MemoryStream} from 'xstream';
import {
  createBrowserHistory,
  createMemoryHistory,
  createHashHistory,
  BrowserHistoryBuildOptions,
  MemoryHistoryBuildOptions,
  HashHistoryBuildOptions,
  Location,
} from 'history';
import {createHistory$} from './createHistory$';
import {
  HistoryInput,
  HistoryDriver,
  GoBackHistoryInput,
  GoForwardHistoryInput,
  GoHistoryInput,
  PushHistoryInput,
  ReplaceHistoryInput,
} from './types';

export function makeHistoryDriver(options?: BrowserHistoryBuildOptions): HistoryDriver {
  const history = createBrowserHistory(options);
  return function historyDriver(sink$: Stream<HistoryInput | string>) {
    return createHistory$(history, sink$);
  };
}

export function makeServerHistoryDriver(options?: MemoryHistoryBuildOptions): HistoryDriver {
  const history = createMemoryHistory(options);
  return function serverHistoryDriver(sink$: Stream<HistoryInput | string>) {
    return createHistory$(history, sink$);
  };
}

export function makeHashHistoryDriver(options?: HashHistoryBuildOptions): HistoryDriver {
  const history = createHashHistory(options);
  return function hashHistoryDriver(sink$: Stream<HistoryInput | string>) {
    return createHistory$(history, sink$);
  };
}
