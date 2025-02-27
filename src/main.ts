import { defineCustomElement } from 'vue'
import HelloWorldCE from './HelloWorld.ce.vue'

customElements.define('hello-world', defineCustomElement(HelloWorldCE))

const helloWorld = document.querySelector('hello-world') as HTMLElement
helloWorld.focus()
