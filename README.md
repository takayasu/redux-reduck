# React Redux Ducks サンプル
StyleGuide付きサンプル

## インストール
```bash
npm install
```

## スタート

```bash
npm start
npm run style
```

## 画面の追加
### ルーティングの追加

```js:App.js
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/friend' component={Friend} />
              // ここに追加
```

### メニューの追加
```js:containers/container/MenuData.js
    {
        id: 1,
        value: 'Home',
        path: '/'
    },
    {
        id: 2,
        value: 'About',
        path: '/about'
    },
    {
        id: 3,
        value: 'Friends',
        path: '/friend'
    }
    //ここに追加
```
