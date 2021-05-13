import { getMediumPosts } from '../index';

test('Valid username', async () => {
  expect(typeof (await getMediumPosts('nirmaan_iitm'))).toBe('object');
});

test('Empty string', async () => {
  expect(await getMediumPosts('')).toBe('Username cannot be empty');
});

test('Prefixed @', async () => {
  expect(typeof (await getMediumPosts('@nirmaan_iitm'))).toBe('object');
});

test('Invalid username', async () => {
  expect(await getMediumPosts('hshsyududud/87')).toStrictEqual({
    status: 404,
    message: 'Invalid username or posts not found for this username',
  });
});
