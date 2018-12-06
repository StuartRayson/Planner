import ContentApiSrvc from './contentApiSrvc';

jest.mock('../config/apiConfig', () => ({
  ARTICLES_URL: 'ARTICLES_URL'
}));

const fetchMock = jest.fn(() => ({
  then: jest.fn()
}));

describe('ContentApiSrvc', () => {
  global.fetch = fetchMock;

  it('should have a getArticles method', () => {
    expect(typeof ContentApiSrvc.getArticles).toBe('function');
  });

  it('getArticles should call fetch with the right url', () => {
    ContentApiSrvc.getArticles();

    expect(fetchMock).toHaveBeenCalledWith('ARTICLES_URL');
  });
});
