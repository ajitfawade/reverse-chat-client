import { schema } from 'normalizr';
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {
  userId: user
});

export const messageSchema = message;
export const userSchema = user;
