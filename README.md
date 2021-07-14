# Reactを勉強しながらアコーディオンを作成

Reactを勉強しつつアコーディオンを作成してみました。

TypeScriptは今後勉強します。

## デモページ

[確認用ページ](https://tanukichi5.github.io/react-accordion/)



## 環境構築

```
npm install
```

ローカルサーバー起動

```
npm start
```

## 使い方

アコーディオンのコンポーネントをインポート

```react
import Accordion from './components/Accordion';
```

### アコーディオンの内容を定義

以下のように配列で内容を定義します

```react
const pokemon_1 = [
  {
    title: 'フシギダネ',
    detail: 'うまれたときから せなかに しょくぶつの タネが あって すこしずつ おおきく そだつ。'
  },
  {
    title: 'ヒトカゲ',
    detail: 'うまれたときから しっぽに ほのおが ともっている。ほのおが きえたとき その いのちは おわって しまう。'
  },
  {
    title: 'ゼニガメ',
    detail: `ながい くびを こうらのなかに ひっこめるとき いきおいよく みずでっぽうを はっしゃする。`
  }
]
```

定義した内容をcontentでpropsを渡す

```react
<Accordion content={pokemon_1} />
```



## Options

その他propsを渡すことで挙動を変更できます

| props                 | type     | default    | description                                |
| --------------------- | -------- | ---------- | ------------------------------------------ |
| defaultExpandedPanels | array    | []         | 最初から開くパネル。パネルのindexを指定。  |
| easing                | string   | "ease-out" | イージング。CSSのプロパティを指定          |
| duration              | string   | ".3s"      | パネルの開閉速度。CSSのプロパティを指定    |
| notTransition         | boolean  | false      | transitionアニメーションを無効にできます。 |
| multipleExpanded      | boolean  | true       | パネルを複数開くかどうか                   |
| onOpen                | function |            | パネルを開いたときのコールバック           |
| onClose               | function |            | パネルを閉じたときのコールバック           |

### 例

```react
<Accordion content={pokemon_1} defaultExpandedPanels={[0,1]} duration={".6s"} onOpen={open} onClose={close}>
```

上記の例は

- 最初から1番と2番のパネルをオープン
- パネル開閉速度を0.6秒
- パネルを開いたときにopen関数を実行
- パネルを閉じたときにclose関数を実行






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
