class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(component) {
        this.root.appendChild(component.root)
    }
}
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }

}



export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
        this._root = null
    }
    setAttribute(name, value) {
        this.props[name] = value
    }
    appendChild(component) {
        this.children.push(component)
    }
    get root() {
        if (!this._root) {
            this._root = this.render().root
        }
        return this._root
    }
}

export function creatElement(type, attribute, ...chirldren) {
    let e
    (typeof type === "string") ? (e = new ElementWrapper(type)) : (e = new type)
    for (let p in attribute) {
        e.setAttribute(p, attribute[p])
    }
    let insertChildren = (chirldren) => {
        for (let child of chirldren) {
            if (typeof child === "string") {
                child = new TextWrapper(child)
            }
            ((typeof child === "object") && (child instanceof Array)) ? (insertChildren(child) ): (e.appendChild(child))

        }

    }
    insertChildren(chirldren)
    return e
}

export function render(component, parentElement) {
    parentElement.appendChild(component.root)
}
