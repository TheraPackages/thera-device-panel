'use babel';

import TheraDevicePanelView from './thera-device-panel-view';
import { CompositeDisposable } from 'atom';

export default {

  theraDevicePanelView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.theraDevicePanelView = new TheraDevicePanelView(state.theraDevicePanelViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.theraDevicePanelView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'thera-device-panel:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.theraDevicePanelView.destroy();
  },

  serialize() {
    return {
      theraDevicePanelViewState: this.theraDevicePanelView.serialize()
    };
  },

  toggle() {
    console.log('TheraDevicePanel was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

};
