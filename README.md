# React Errors

> Show errors on the top-right

## Demo

http://xcatliu.com/react-errors/

## Usage

**Warning: This component will render exactly what messages in `errors`, so you should change `errors` when `onErrorClose` is triggered.**

### Props

Props | Description | Required | Default
===== | =========== | ======== | =======
`errors` | array of error, each error should be a instance of `Error` or an object which contains `message` | Y |
`onErrorClose` | fire when close button clicked, with a param which is the index of errors | Y |

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
