export const KEY_PRESSED = 'KEY_PRESSED';
export const KEY_RELEASED = 'KEY_RELEASED';
export const GROUP_UPDATE = 'GROUP_UPDATE';

export const keyPressed = key => ({
  type: KEY_PRESSED,
  key
});

export const keyReleased = key => ({
  type: KEY_RELEASED,
  key
});

export const groupUpdate = group => ({
  type: GROUP_UPDATE,
  group
});
