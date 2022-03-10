import React, { useEffect, useState } from "react";
import Avatar from "avataaars";
import {AvatarBG, Top, Accessories, FacialHair, FacialHairColor, HairColor, Clothes, ClotheColor, Eye, Eyebrow, Mouth, skinColor } from "./AvatarThings";

/**
 * https://stackoverflow.com/questions/71244031/how-to-do-condition-based-dont-repeat-yourself-dry-principle-in-react-js
 * https://codesandbox.io/s/how-to-do-condition-based-dont-repeat-yourself-dry-principle-in-react-js-forked-fv4c54?file=/src/App.js:185-227
 */

const getRandomAttribute = (arr) => arr[Math.floor(Math.random() * arr.length)];

const useRandomAttribute = (attributes = [], valueArr = []) => {
  // console.log(valueArr?.length);

  const [attribute, setAttribute] = useState(() => {
    if (valueArr[0] !== true ) {
      return valueArr[0]
    }
    return getRandomAttribute(attributes);
  });

  useEffect(() => {
    let timerId;
    if (valueArr[0] && valueArr[1] > 0) {
      timerId = setInterval(() => {
        const attribute = getRandomAttribute(attributes);
        setAttribute(attribute);
      }, valueArr[1]);
    }
    return () => clearTimeout(timerId);
  }, [attributes, valueArr]);

  return attribute;
};

const Avatars = ({ avatarStyle, topType, facialHairType, accessoriesType, hairType, clothesType, clothesColorType, eyeType, eyebrowType, mouthType, skinType }) => {

  const avatar = useRandomAttribute(AvatarBG, avatarStyle);
  const top = useRandomAttribute(Top, topType);
  const accessory = useRandomAttribute(Accessories, accessoriesType);
  const hair = useRandomAttribute(HairColor, hairType);
  const face = useRandomAttribute(FacialHair, facialHairType);
  const faceialColor = useRandomAttribute(FacialHairColor, facialHairType);
  const clothe = useRandomAttribute(Clothes, clothesType);
  const clotheColors = useRandomAttribute(ClotheColor, clothesColorType);
  const eye = useRandomAttribute(Eye, eyeType);
  const eyebrow = useRandomAttribute(Eyebrow, eyebrowType);
  const mouth = useRandomAttribute(Mouth, mouthType);
  const skin = useRandomAttribute(skinColor, skinType);

  return (
    <Avatar
      avatarStyle={ avatar ||"Circle"}
      topType={top || "ShortHairDreads01"}
      accessoriesType={accessory || "Blank"}
      hairColor={hair || "BrownDark"}
      facialHairType={face || "Blank"}
      facialHairColor={ faceialColor || "Red"}
      clotheType= { clothe || "Hoodie" }
      clotheColor= { clotheColors || "Red" }
      eyeType= { eye || "Wink"}
      eyebrowType={ eyebrow || "Default"}
      mouthType={ mouth || "Smile"}
      skinColor={ skin || "Brown"}
    />
  );
};

export default Avatars;
