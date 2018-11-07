import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';


function getTag(tag) {
  const url = `https://www.behance.net/v2/collections?q="${tag}"&api_key=V5nTUtxu7rdHibZB4A9hCsnti0wirm7e`;
  return request
          .get(url)
    .then((data) => {
      return JSON.parse(data.text);
    });
}

function* callGetTag({tag, resolve, reject}) {
  const result = yield call(getTag, tag);
  if (result) {
    yield put({type: "PROJECT_FETCHED", result});
    yield call(resolve);
  } else {
    yield call(reject, {tag: 'No data for that tag'});
  }
}

function* getTagSaga() {
  yield* takeEvery("FETCH_PROJECT", callGetTag);
}

export default function* root() {
  yield [
    fork(getTagSaga)
  ]
}
