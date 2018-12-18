import { PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';
import { html } from '../../../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
import RESTerThemeMixin from '../data/rester-data-theme-mixin.js';

/**
 * @appliesMixin RESTerThemeMixin
 * @polymer
 * @customElement
 */
class RESTerHighlightHeaders extends RESTerThemeMixin(PolymerElement) {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas',
                        'source-code-pro', monospace;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 16px;
                    padding: 4px;
                    margin-bottom: 16px;
                }

                :host([theme='dark']) {
                    background-color: #141414;
                    color: #f8f8f8;
                }

                :host([theme='dark']) .name {
                    color: #7587a6;
                }

                :host([theme='dark']) .value {
                    color: #8f9d6a;
                }

                :host([theme='light']) {
                    background-color: #f5f5f5;
                    color: #000;
                }

                :host([theme='light']) .name {
                    color: #318495;
                }

                :host([theme='light']) .value {
                    color: #1a1aa6;
                }
            </style>

            <template is="dom-repeat" items="[[headers]]">
                <div class="header">
                    <span class="name">[[item.name]]</span>:
                    <span class="value">[[item.value]]</span>
                </div>
            </template>
        `;
    }

    static get is() {
        return 'rester-highlight-headers';
    }

    static get properties() {
        return {
            headers: {
                type: Array,
                value: []
            }
        };
    }
}

customElements.define(RESTerHighlightHeaders.is, RESTerHighlightHeaders);
