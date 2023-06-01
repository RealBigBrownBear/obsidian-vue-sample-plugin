import { App, PluginSettingTab } from "obsidian";
import VueSamplePlugin from "./main";
import { createApp } from "vue";
import SettingTab from "SettingTab.vue";

export class VueSamplePluginSettingTab extends PluginSettingTab {
    plugin: VueSamplePlugin;
    constructor(app: App, plugin: VueSamplePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        createApp(SettingTab).mount(containerEl);
    }
}
