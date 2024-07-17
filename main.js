import { render, Component, creatElement } from './react-toy.js'

class MyComponent extends Component {
    render() {
        return (<div>
            <h1>my component</h1>
            {this.children}
        </div>)
    }
}




render(<MyComponent id="a" class="c">
    <div>333</div>
    <div>1111</div>
    <div>222</div>
</MyComponent>,document.body) 
