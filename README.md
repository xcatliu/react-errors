# React Errors

> Show errors on the top-right

## Demo

http://xcatliu.com/react-errors/

## Usage

**Warning: This component will render exactly what messages in `errors`, so you should change `errors` whenever `onErrorClose` triggered.**

### Props

Props | Description | Required | Default
===== | =========== | ======== | =======
`errors` | array of error, each error should be a instance of `Error` or an object which contains `message` | Y |
`onErrorClose` | trigger when the close button is clicked, with a param which is the index of errors | Y |

## Contributing

### Build

```shell
npm run build
```

### Deploy

```shell
npm version <patch|minor|major>
git push
git push --tags
npm publish
```

### Deploy Examples

```shell
npm run deploy:gh-pages
```
