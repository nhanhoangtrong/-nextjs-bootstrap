import utf8 from 'utf8';
import debug from 'debug';
import isBrowser from './isBrowser';

class ApiCaller {
  static DEFAULT_OPTIONS = {
    fetch: fetch,
    baseURL: 'http://localhost:3000',
    debug: true,
  };

  static DEFAULT_HEADERS = {};

  constructor(headers, options) {
    if (typeof options === 'undefined') {
      options = headers;
      headers = options.headers;
    }
    // First initialize ApiCaller with options
    this._options = Object.assign({}, ApiCaller.DEFAULT_OPTIONS, options);

    // Then initialize headers
    this._options.headers = Object.assign(
      {},
      ApiCaller.DEFAULT_HEADERS,
      headers
    );

    // Finally initilize the instance based on options
    this._initialize(this._options);
  }

  _initialize(options) {
    this._fetch = options.fetch;
    this._headers = options.headers;
    this._baseURL = options.baseURL;
    this._debug = debug('app:api-caller');
  }

  setAuthorizationHeader(value = '') {
    this._headers['authorization'] = value;

    return this;
  }

  setHeader(headerKey, headerValue) {
    this._headers[headerKey] = headerValue;

    return this;
  }

  call(method, path, data, customHeaders = {}) {
    let url = this._baseURL + path;
    if (!isBrowser) {
      url = utf8.encode(url);
    }
    if (this._options.debug) {
      this._debug(`${method} ${url} - data: %j`, data);
    }
    const headers = {
      ...this._headers,
      ...customHeaders,
    };

    let body = undefined;

    if (method !== 'GET' && method !== 'HEAD' && typeof data === 'object') {
      // On mutation methods, use JSON as default
      headers['content-type'] = 'application/json';
      body = JSON.stringify(data);
    }

    return this._fetch(url, {
      method,
      body: body,
      headers: headers,
      credentials: 'omit',
    })
      .then((res) => {
        if (this._options.debug) {
          this._debug(`${method} ${url} - status: ${res.status}`);
        }
        if (res.status < 300) {
          return res.json();
        }

        // Parse error
        const error = new Error(
          `Request ${method} ${url} error with Status ${res.status}`
        );
        error.name = 'ResponseError';
        error.response = res;
        throw error;
      })
      .catch((err) => {
        // First check if this is FetchError
        if (this._options.debug) {
          this._debug(`${method} ${url} - error: ${err.name}`);
        }
        if (err.name === 'FetchError') {
          console.error('fetch error', err);
        }
        throw err;
      });
  }
}

export default ApiCaller;
