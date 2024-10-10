import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';

const DiceBearAvatar = () => {
  const svg = createAvatar(style, {
    seed: 'unique-seed',  // Any unique string, such as a username
    accessories: ['sunglasses'],
    hairColor: ['brown', 'black'],
    facialHairColor: ['brownDark'],
    top: ['shortHair'],
    eyes: ['happy'],
    mouth: ['smile'],
    skin: ['light'],
  });

  return (
    <div
      className="avatar-container"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default DiceBearAvatar;
