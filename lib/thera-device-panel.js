'use babel';

import TheraDevicePanelView from './thera-device-panel-view';
import { CompositeDisposable } from 'atom';

export default {

    theraDevicePanelView: null,
    subscriptions: null,

    activate(state) {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'thera-device-panel:toggle': () => this.toggle()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
        this.theraDevicePanelView.destroy();
    },

    serialize() {
        if (this.heraDevicePanelView != null) {
            return {
                theraDevicePanelViewState: this.theraDevicePanelView.serialize()
            };
        }
    },


    toggle() {
        this.devicePanel = this.devicePanel || new TheraDevicePanelView()
        console.log(this.devicePanel);
        this.devicePanel.show()
    }

};