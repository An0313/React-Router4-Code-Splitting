React Router4 Coding Splitting

按需加载基于[react-loadable](https://github.com/jamiebuilds/react-loadable#loadablemap)

# 安装
```
yarn add react-loadable
// 或者
npm install react-loadable
```

# 基本使用
```React
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
 
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});
 
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

# 加载错误状态
```javascript
function myLoadingComponent(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
}
```

# 避免加载组件的闪烁

有时组件加载速度非常快（<200ms），加载屏幕只会在屏幕上快速闪烁。
```javascript
function myLoadingComponent(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


Loadable({
  loader: () => import('./components/Bar'),
  loading: Loading,
  delay: 300, // 默认200ms
});
```

# 等待loader时间过长
```javascript
function myLoadingComponent(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

Loadable({
  loader: () => import('./components/Bar'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});
```