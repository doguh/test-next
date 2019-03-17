import fetch from 'isomorphic-unfetch';

const call = async function(method, url) {
  const res = await fetch(url, { method });
  if (res.ok) {
    return res.json();
  } else {
    const message = await res.text();
    throw { status: res.status, message };
  }
};

export const get = async function(url) {
  return call('GET', `http://localhost:3000/api/${url}`);
};

export default {
  get,
};
