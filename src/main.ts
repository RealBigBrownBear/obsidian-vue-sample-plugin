import { Plugin } from "obsidian";
import { VueSamplePluginSettingTab } from "./setting-tab";

export default class VueSamplePlugin extends Plugin {
    onload() {
        this.addSettingTab(new VueSamplePluginSettingTab(this.app, this));
    }
    onunload() {
    }
}
