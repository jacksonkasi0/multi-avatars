# Multi Avatars?

**Multi Avatars: 🎉**

<p align="center"><img src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/in718c8v70mkc3dbl7qu.gif' style='border-radius: 10px' /></p>

multi-avatars is a React component based on the **npm package [avataaars](https://www.npmjs.com/package/avataaars)**.

It is random to you depending on what you are giving
Or give some other svg avatars.

#### NOTE: **avataaars is a open-source project**
---

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Fast
 - It's don't affect your web performance 🚀

## Usage

**for dev:**

<a href="https://codesandbox.io/embed/how-to-do-condition-based-dont-repeat-yourself-dry-principle-in-react-js-forked-fv4c54?
" target="_blank" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6qfxr44mftqozse735mp.png" style="width:150px; border-radius:6px"/>
</a>

**for use:**

<a href="https://codesandbox.io/s/relaxed-grothendieck-d39qdk?" target="_blank" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6qfxr44mftqozse735mp.png" style="width:150px; border-radius:6px"/>
</a>

First, you need to install the `multi-avatars` component package, here you run

```sh
npm i multi-avatars
```

Then, in your React app, import the `avataaars ` and `multi-avatars` component and put it where you like it to be, for example

```sh
import Avatars from "multi-avatars";

export default function App() {
  return (
      <Avatars
        avatarStyle={[true, 500]}
        topType={[true, 1000]}
        accessoriesType={[true, 1200]}
        //facialHairType={[true,500]}
        //facialHairType={[true,500]}
        clothesType={[true, 500]}
        clothesColorType={[true, 1000]}
        eyeType={[true]}
        eyebrow={[true, 2000]}
        mouthType={[true, 1200]}
        skinType={["Brown"]}
      />
  );
}
```

## expalin the code: 👀

- The first of these is **true** which gives random avatars parts.
- The second refers to the number of **milliseconds** to give / change random avatars parts.

- Maybe if you only gave true then Avatars will give only once and it will not change after that.
Those parts will change only if you give the second millisecond.

#### For example:

```sh
eyeType={[true]}
```

- the `eyeType` only does not change as the above avatar is given only true in eyeType.

```sh
skinType = {["Brown"]
```

- And if you do not want to change a part of something you can give it(value) directly.
Look at the skin color of the avatar in the picture above...

> value = **Brown**

[Avatar Options](https://getavataaars.com) click here to know the avatars options...

- If you do not give a props something will probably take its default value.

- But `facialHairType` only will not appear in the avatar unless you use it alone.

```sh
// facialHairType={[true,500]} // if don't wand this field (facialHair), so u do not use this
```

---

## Hey guys 👋 read adout this...

<a href="https://dev.to/jacksonkasi/how-i-am-create-my-first-beautiful-npm-package-with-21ga" target="_blank" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y51iomyhydwnv1fbs0q7.png" style="width:60px" >
</a>

**[Read my DEV POST✨](https://dev.to/jacksonkasi/how-i-am-create-my-first-beautiful-npm-package-with-21ga)**

### resource/info:

- [dry - qiuze](https://stackoverflow.com/questions/71244031/how-to-do-condition-based-dont-repeat-yourself-dry-principle-in-react-js)

- [How to publish your react component package to npm?](https://levelup.gitconnected.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506)